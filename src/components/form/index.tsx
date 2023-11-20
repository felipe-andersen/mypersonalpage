'use client'
import  Cookies  from "js-cookie";
import { Div } from "./styles"
import React, { useState } from "react"
import client from '@/graphql'
import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { useForm, SubmitHandler } from "react-hook-form";



//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;




export const Form = () => {

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

    const lo = client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

  
   

    function setCookies() {
        Cookies.set('name', "FELIPE")
        Cookies.set('email', "felipe.coutinho.psl@gmail.com")
        Cookies.set('phone', "21999187250")
        Cookies.set('mensage', "Hi")
    }

    true && setCookies()

    const [value, setValue] = useState(`${Cookies.get("name") === undefined ? "" : Cookies.get("name")}`)

    interface Inputs {
        name?: string
        email?: string
        phone?: string
        mensage?: string
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    

    return (

      

        <Div className=''>
        
            <h2>Contato</h2>

            <p>Contrate um serviço, peça consultoria ou envie um proposta de trabalho</p>

            <form
                onSubmit={handleSubmit(onSubmit)}>

                <label>Nome*</label>

                <input type="text" placeholder='Ex.: Jonh' defaultValue={value} {...register('name', { required: true })}/>
                    

                <label>Email*</label>

                <input  type="text" placeholder='Ex.: jonh@exemple.com' defaultValue={`${Cookies.get("email") === undefined ? "" : Cookies.get("email")}`} {...register('email', { required: true })}/>

                <label>Telefone</label>

                <input type="text" placeholder='Ex.: 00000-0000' defaultValue={`${Cookies.get("phone") === undefined ? "" : Cookies.get("phone")}`} {...register('phone', { required: true })}/>

                <label>Mensagem*</label>

                <input className='msg' type="text" placeholder='You mensage' defaultValue={`${Cookies.get("mensage") === undefined ? "" : Cookies.get("mensage")}`} {...register('mensage', { required: true })}/>

            </form>

            <button>Enviar mensagem</button>

          

        </Div>
  
    )
                
}