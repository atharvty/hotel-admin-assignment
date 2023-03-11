import Room from "../../schemas/room";

export default async function handler(req,res){
    const {email,roomType,roomNumber,startTime,endTime,price}=req.body;
    console.log(email,roomType,startTime,endTime,price);
    try{
        const room=new Room({
            userId:1,email,roomType,roomNumber,startTime,endTime,booked:true,price
        })
        console.log(room);
        await Room.create(room);
        return res.status(201).json('room booked');
    }catch(err){
        console.log(err);
        return res.status(400).send(err);
    }
}