
 
import { cookies } from 'next/headers'
 
interface data  {
    key: string
    value: string
}

async function createCookie(data:data) {

  cookies().set(data.key, data.value, { secure: true })

}

const cookiesList = cookies()
cookiesList.has('name')

createCookie({key:"name",value:"FELIPE"})


export default function Page() {
    const cookieStore = cookies()
    const name = cookieStore.get('name')
    return '...'
  }