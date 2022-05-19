// let V_Reservation=require("../models/taxi")
import taxi from "../models/taxi.js"

export const postTaxiReserve=async(req,res)=>{

        
           const vehicleType= req.body.vehicleType
           const from= req.body.from
           const to= req.body.to
           const date=req.body.date
           const fname=req.body.fname
           const lname=req.body.lname
           const email=req.body.email
           const phone=req.body.phone
        


        const newTaxi=new taxi({
            vehicleType,
            from,
            to,
            date,
            fname,
            lname,
            email,
            phone,
        })
        // newTaxi.save()
        newTaxi.save().then(()=>{
            res.status(200).send({
                status:"reservation made successfull"
            })
        }).catch((err)=>{
            console.log(err.message)
            res.status(500).send({
                status:"Error with adding reservation"
            })
        })


        // newData.save()

        // .then((V_Reservation)=>{
        //     if (!V_Reservation){
        //         const newVRES=new V_Reservation(newData)


        //     }else{
        //         res.status(409).send({
        //             status: "Reservation already existing"
        //         })
        //     }
        // })
    

    
}