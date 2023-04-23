import { ConnectWallet, useAddress, useContract, useContractRead} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address= useAddress();
  const contractAddress= "0x40F8aF704563F871bf7d74a7fc442EEBb1b36b0a" ;
  const {contract} = useContract(contractAddress);
  const { data: proposal, isLoading: proposalLoading} = useContractRead(contract,"proposal", 0);
  const { data: hasvoted, isLoading: hasVotedLoading} = useContractRead(contract, "hasVoted", 0, address);
    return ( 
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
<h1>Voting Application</h1>

        </div>
      </main>
    </div>
  );
};

export default Home;
