import paysageMer from '../../assets/paysage-mer.png'
import Banner from '../../components/Banner'
import LogementCards from '../../components/LogementCards'

function Home() {
    const citationBanner = 'Chez vous, partout et ailleurs'
    return (
        <div>
            <Banner image={paysageMer} citation={citationBanner}></Banner>
            <LogementCards></LogementCards>
        </div>
        )
  }
  
  export default Home