import Room from "../../schemas/room";

export default async function handler(req, res) {
    const allrooms = await Room.find({}, {
        '_v': 0
    });
    const finalData = JSON.stringify(allrooms);
    return res.status(200).send(finalData);
}