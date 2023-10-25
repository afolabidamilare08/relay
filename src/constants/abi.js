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
                "name":"erc721Count_","type":"address"}],
                "stateMutability":"nonpayable","type":"constructor"},{"inputs":[],
                "name":"TradesController","outputs":[{"internalType":"contract ITradesController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"owner2","type":"address"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"}],"internalType":"struct EtherPointCreationData[]","name":"eth","type":"tuple[]"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"}],"internalType":"struct Erc20PointCreationData[]","name":"erc20","type":"tuple[]"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"internalType":"struct Erc721ItemPointCreationData[]","name":"erc721Item","type":"tuple[]"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"}],"internalType":"struct Erc721CountPointCreationData[]","name":"erc721Count","type":"tuple[]"}],"internalType":"struct TradeCreationData","name":"data","type":"tuple"}],"name":"createTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"erc20","outputs":[{"internalType":"contract IErc20TradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc721Count","outputs":[{"internalType":"contract IErc721CountTradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc721Item","outputs":[{"internalType":"contract IErc721ItemTradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eth","outputs":[{"internalType":"contract IEtherTradePointsController","name":"","type":"address"}],"stateMutability":"view","type":"function"}],

        abi2:[
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "feeSettingsAddress",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "executed",
                  "type": "bool"
                }
              ],
              "name": "Execute",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "creator",
                  "type": "address"
                }
              ],
              "name": "NewTrade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "OnWithdraw",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "Swap",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "addFactory",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "TradePointsController",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "newPointId",
                  "type": "uint256"
                }
              ],
              "name": "addTradePoint",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner1",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "owner2",
                  "type": "address"
                }
              ],
              "name": "createTrade",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "execute",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ownerNumber",
                  "type": "uint256"
                }
              ],
              "name": "executeEtherValue",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeDecimals",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeEth",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ownerNumber",
                  "type": "uint256"
                }
              ],
              "name": "feeEthOnWithdraw",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feePercent",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeSettings",
              "outputs": [
                {
                  "internalType": "contract IFeeSettings",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalTradePointsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "getTrade",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "state",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "owner1",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "owner2",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "pointsCount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Trade",
                  "name": "",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "controller",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "TradePointTypeId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "TradeId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "from",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "to",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "fee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "isSwapped",
                      "type": "bool"
                    },
                    {
                      "internalType": "bool",
                      "name": "isExecuted",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct TradePointData[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "getTradeHeader",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "state",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "owner1",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "owner2",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "pointsCount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Trade",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "pointIndex",
                  "type": "uint256"
                }
              ],
              "name": "getTradePoint",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "controller",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "TradePointTypeId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "TradeId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "from",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "to",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "fee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "isSwapped",
                      "type": "bool"
                    },
                    {
                      "internalType": "bool",
                      "name": "isExecuted",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct TradePointData",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "getTradePoints",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "controller",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct TradePointRef[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "getTradePointsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "isExecuted",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                }
              ],
              "name": "isFactory",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "isSwapped",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "removeFactory",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "addresses",
                  "type": "address[]"
                },
                {
                  "internalType": "bool",
                  "name": "isFactory_",
                  "type": "bool"
                }
              ],
              "name": "setFactories",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "stopTradeEditing",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "swap",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "TradeId",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
          ]


            }