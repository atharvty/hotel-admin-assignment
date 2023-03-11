import Room from "../../schemas/room";

export default async function handler(req,res){
    const {email,roomType,roomNumber,startTime,endTime,oldRoom}=req.body;
    const foundroom=await Room.find({roomNumber:oldRoom},{
        '_v':0
    });
    var d=new Date();
    d.getTime()
    console.log(foundroom[0]);

    if (foundroom.length==0){
        return res.status(404).json({
          code: 'BAD_REQUEST_ERROR',
          description: 'There is no booking for the following room',
          source: 'authorization_signin',
          reason: 'db_query_not_found',
          metadata: {}
        });
    }else{
        if(email){
            const updateroom=await Room.findOneAndUpdate({roomNumber:oldRoom},{email:email});
        }
        if(startTime &&endTime){
            const updateroom=await Room.findOneAndUpdate({roomNumber:oldRoom},{startTime:startTime});
            const updateroom2=await Room.findOneAndUpdate({roomNumber:oldRoom},{endTime:endTime});
        }
        if((startTime &&!endTime)){
            if(Date.parse(foundroom[0].endTime)<Date.parse(startTime)){
                return res.status(404).json({
                    code: 'BAD_REQUEST_ERROR',
                    description: 'Enter the starTime less than your current endtime',
                    source: 'authorization_signin',
                    reason: 'db_query_not_found',
                    metadata: {}
                  });
            }else{
                const updateroom=await Room.findOneAndUpdate({roomNumber:oldRoom},{startTime:startTime});
            }
        }
            if(!startTime &&endTime){
                if(Date.parse(foundroom[0].startTime)>Date.parse(endTime)){
                    return res.status(404).json({
                        code: 'BAD_REQUEST_ERROR',
                        description: 'Enter the endTime greater than your current  starttime',
                        source: 'authorization_signin',
                        reason: 'db_query_not_found',
                        metadata: {}
                      });
                }else{
                    const updateroom2=await Room.findOneAndUpdate({roomNumber:oldRoom},{endTime:endTime});
                }
            }
    
    
            if(roomType &&roomNumber){
                const updateroom2=await Room.findOneAndUpdate({roomNumber:oldRoom},{roomType:roomType});
                const updateroom3=await Room.findOneAndUpdate({roomNumber:oldRoom},{roomNumber:roomNumber});
                return res.status(200);
            }else if(roomType &&!roomNumber){
                return res.status(404).json({
                    code: 'BAD_REQUEST_ERROR',
                    description: 'Enter the room number also',
                    source: 'authorization_signin',
                    reason: 'db_query_not_found',
                    metadata: {}
                  });
            }
        }

    }

