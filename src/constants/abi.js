module.exports = {
    abi: [
        {"inputs":[
            {
                "internalType":"contract ITradesController",
                "name":"TradesController_",
                "type":"address"
            },
            {
                "internalType":"contract IEtherTradePointsController",
                "name":"eth_",
                "type":"address"
            },
            {
                "internalType":"contract IErc20TradePointsController",
                "name":"erc20_",
                "type":"address"
            },
            {
                "internalType":"contract IErc721ItemTradePointsController",
                "name":"erc721Item_",
                "type":"address"
            },
            {
                "internalType":"contract IErc721CountTradePointsController",
                "name":"erc721Count_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"TradesController","outputs":[{"internalType":"contract ITradesController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"owner2","type":"address"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"}],"internalType":"struct EtherPointCreationData[]","name":"eth","type":"tuple[]"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"}],"internalType":"struct Erc20PointCreationData[]","name":"erc20","type":"tuple[]"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"internalType":"struct Erc721ItemPointCreationData[]","name":"erc721Item","type":"tuple[]"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"}],"internalType":"struct Erc721CountPointCreationData[]","name":"erc721Count","type":"tuple[]"}],"internalType":"struct TradeCreationData","name":"data","type":"tuple"}],"name":"createTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"erc20","outputs":[{"internalType":"contract IErc20TradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc721Count","outputs":[{"internalType":"contract IErc721CountTradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc721Item","outputs":[{"internalType":"contract IErc721ItemTradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eth","outputs":[{"internalType":"contract IEtherTradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
}