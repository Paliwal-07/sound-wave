import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

import { stripe } from '@/libs/stripe';
import { getURL } from '@/libs/helpers';
import { createOrRetrieveCustomer } from '@/libs/supabaseAdmin';

export async function POST() {
  try {
    const supabase = createRouteHandlerClient({ 
      cookies
     });
    
    const {
      data: { user }
    } = await supabase.auth.getUser();
    //@ts-ignore
    if (!user) throw Error('Could not get user');
    const customer = await createOrRetrieveCustomer({
      uuid: user.id || '',
      email: user.email || ''
    });
    //@ts-ignore
    if (!customer) throw Error('Could not get customer');
    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${getURL()}/account`
    });
    //@ts-ignore
    return new Response({ url });
  } catch (err: any) {
    console.log(err);
    new NextResponse('Internal Error', { status: 500 })
  }
};