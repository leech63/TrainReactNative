/* eslint-disable prettier/prettier */
export function getCoinIconUri(coinName) {
    switch (coinName) {
        case 'Bitcoin':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';
 
        case 'Ethereum':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';
 
        case 'XRP':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';
 
        case 'EOS':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';
 
        case 'Bitcoin Cash':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';
 
        case 'Litecoin':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';
 
        case 'Tether':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/theta@2x.png?raw=true';  
        case 'Chainlink':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/chain@2x.png?raw=true';    
        case 'Cardano':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/cdn@2x.png?raw=true';    
        case 'Polkadot':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/poa@2x.png?raw=true';    
       
        default:
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/dew@2x.png?raw=true';
    }
}
