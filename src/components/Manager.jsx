import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

function manager() {
    const ref = useRef()
    const passref = useRef()
    const showpass = () => {
        if (ref.current.src.includes("src/assets/openeye.svg")) {
            ref.current.src = "src/assets/closeeye.svg"
            passref.current.type = "text"

        }
        else {
            ref.current.src = "src/assets/openeye.svg"
            passref.current.type = "password"


        }
    }

    useEffect(() => {
        let pass = localStorage.getItem("pass")
        if (pass) {
            setpasswordarr(JSON.parse("pass"))
        }
    }, [])





    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const savepass = () => {

        setpasswordarr([...passwordarr, form])
        localStorage.setItem("password", JSON.stringify([...passwordarr, form]))
        console.log(passwordarr);
        console.log(form)


    }

    const [form, setform] = useState({ username: "", password: "", site: "" })

    const [passwordarr, setpasswordarr] = useState([])
    return (
        <div className=' m-22 '>

            <div className='flex flex-col  '>
                <div className='flex  flex-col items-center'>
                    <div className='text-black font-bold text-4xl  gap-3'>
                        <span className='text-green-700 font-bold'>&lt;</span>
                        Pass
                        <span className='text-green-700 font-bold'>OP/&gt;</span>

                    </div>
                    <p>your own password manager</p>


                </div>

                <div className=' flex flex-col mt-3 gap-5'>
                    <div className=''>
                        <input type="text"
                            value={form.username}

                            name='username'
                            className='border py-0   p-4 focus:border-green-700 border-green-900 w-full rounded-full'
                            placeholder='username'
                            onChange={handlechange}
                        />
                    </div>
                    <div className='flex gap-'>
                        <input type="text"
                            name='site'
                            value={form.site}
                            className='border w-full rounded-full py-0 p-4
                             border-green-700'
                            placeholder='password'
                            onChange={handlechange}
                        />


                        <input type="password"
                            ref={passref}


                            value={form.password}
                            name='password'
                            onChange={handlechange}


                            className='border-green-700 border rounded-full py-0   p-4 relative  left-5'
                            placeholder='conform' /> <span className='relative right-17 top-2'>


                            <img
                                onClick={showpass}
                                ref={ref}
                                src="src/assets/openeye.svg" alt="eye"
                                className='h-7 relative left-11 bottom-2 cursor-pointer'


                            />
                        </span>
                    </div>


                </div>

                <button
                    onClick={savepass}
                    className='bg-green-700 mt-7 rounded-full flex items-center gap-2 hover:bg-green-500 px-4 cursor-pointer p-2'>

                    <img className='h-6' src="src/assets/add.svg" alt=""

                    />

                    Add password</button>

            </div>
            <h1 className='font-bold '>your passwords</h1>
            {passwordarr.length === 0 && <p>no password to show</p>}
            {passwordarr != 0 &&


                <table className='table-auto w-full rounded-md overflow-hidden'>
                    <thead className='bg-blue-900 text-white p-4 rounded-lg' >
                        <tr className='rounded-lg bg-'>
                            <th className='text-center p-1'>site</th>
                            <th className='text-center '>username</th  >
                            <th className='text-center '>passward</th >

                        </tr>

                    </thead>
                    <tbody className='bg-blue-500'>
                        {passwordarr.map((item, index) => {
                            return <tr>
                                <th className='text-center '>{item.site} </th >
                                <th className='text-center '>{item.username} </th >
                                <th className='text-center '>{item.password}</th>
                            </tr>
                        })}
                    </tbody>
                </table>}

            <div>
            </div>



        </div>



    )
}

export default manager
