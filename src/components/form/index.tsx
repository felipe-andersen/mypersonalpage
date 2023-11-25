'use client'
import  Cookies  from "js-cookie";
import { Div } from "./styles"
import React, { useState } from "react"

import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { cookies } from "next/headers";
// import { computedTypesResolver } from '@hookform/resolvers/computed-types';
// import Schema, { number, string } from 'computed-types';

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;


export const Form = () => {
    const [name, setName ] = useState<string>("Felipe");
    const [email, setEmail ] = useState<string>("felipe.coutinho.psl@gmail");
    const [phone, setPhone ] = useState<string>("99 99999-9999");
    const [message, setMessage ] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nam provident nemo, maiores quaerat omnis inventore adipisci placeat esse nostrum dignissimos ducimus, quos iure.");

type FormData = {
  name: string
  email: string
  phone?: string
  message: string

}

    const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// const { loading, error, data } = useQuery(GET_LOCATIONS);
   
    function setCookies() {
        Cookies.set('name', `${name}`)
        Cookies.set('email', `${email}`)
        Cookies.set('phone', `${phone}`)
        Cookies.set('message', `${message}`)
    }


    function onChange(event:any) {
      setName(event.target.value)
      Cookies.set('name', `${name}`)
      
    }

    true && setCookies()

    const [value, setValue] = useState(`${Cookies.get("name") === undefined ? "" : Cookies.get("name")}`)


    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm<Inputs>()

      const onSubmit = (data:any) => console.log(data);

      const formSchema = z.object({
          name: z.string().min(1, { message: 'Required' }).max(30),
          email: z.string().min(1, { message: 'Required' }).max(50),
          phone: z.string().max(30),
          message: z.string().min(1, { message: 'Required' }).max(250)
      });

      const { register, handleSubmit, formState} = useForm<FormData>({ resolver: zodResolver(formSchema),criteriaMode: 'all',
      mode: 'all', defaultValues: {
        name: `${Cookies.get("name") === undefined ? "" : Cookies.get("name")}` ,
        email: `${Cookies.get("email") === undefined ? "" : Cookies.get("email")}` ,
        phone: `${Cookies.get("phone") === undefined ? "" : Cookies.get("phone")}` ,
        message: `${Cookies.get("message") === undefined ? "" : Cookies.get("message")}`
      } });

    return (

        <Div className=''>
        
            <h2>Contato</h2>

            <p>Contrate um serviço, peça consultoria ou envie um proposta de trabalho 

            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}>

                <>

                    <label>Nome*</label>

                    <input type="text" placeholder='Ex.: Jonh' {...register('name', {required: false})} maxLength={30} minLength={1} onChange={(event) => {setName(event.target.value)}}/>

                    {formState.errors.name?.message && <span>{formState.errors.name?.message}</span>}

                </>

                    

                <label>Email*</label>

                <input  type="text" placeholder='Ex.: jonh@exemple.com' {...register('email', { required: true })} maxLength={50} />

                {formState.errors.email?.message && <span>{formState.errors.email?.message}</span>}

                <label>Telefone</label>

                <input type="text" placeholder='DDD + phone. Ex.: 99 99999-9999' {...register('phone')} maxLength={30}/>

                {formState.errors.phone?.message && <span>{formState.errors.phone?.message}</span>}

                <label>Mensagem*</label>

                <textarea className='msg'rows={5} cols={33} placeholder='You message' {...register('message', { required: true })} maxLength={250}/>

                {formState.errors.message?.message && <span>{formState.errors.message?.message}</span>}

                <button type="submit">Enviar mensagem {formState.isLoading && <span>Loading</span>}</button>

            </form>

          

        </Div>
  
    )
                
}