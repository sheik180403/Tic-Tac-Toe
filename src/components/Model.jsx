import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"

const Model=forwardRef(function Model({reset},ref){

    const dialog=useRef()

    const [win,setwin]=useState()
    

    useImperativeHandle(ref,()=>{
        return{
            open(winner){
                setwin(winner)
                dialog.current.showModal()
            }
        }
    })

    const close=()=>{
        reset()
        dialog.current.close();
    }



    return <>
    <dialog ref={dialog}>
        <div className="dialog">
        {win=="Draw" ? <h3>{win}</h3>: <h3>{win} won</h3>}
        
        <button  onClick={close}>Restart</button>
        </div>
       
    </dialog>
    </>
})

export default Model