import axios from "axios";

const mtgapi = axios.create({
    baseURL: "https://api.magicthegathering.io/v1"
}) 
const MtgApiLib = {
    getCards: async () => {
        return mtgapi.get('/cards')
    },
    getSingleRandomCard: () => {
        let searchp = {
            params: {
                pageSize: 1, 
                random: true
            }
        }
        let prm = mtgapi.get('/cards', searchp);
        return prm.then(function (res) {
            return res.data.cards[0];
        }).catch(function (e) {
            return null;
        })
    }
}

export default MtgApiLib;