
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.14.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that sending & recieving works",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        let wallet_1 = accounts.get('wallet_1')!;
        let block = chain.mineBlock([
            Tx.contractCall('Messenger', 'get-messages', [types.ascii("ummarikram"), types.ascii("Ali Raza")], wallet_1.address),
            
        ]);

        assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);
        
    
        block.receipts[0].result
        .expectErr()
        .expectList();

       

    },
});
