import paysageMontagne from '../../assets/paysage-montagne.png'
import Banner from '../../components/Banner'
import CollapsingElement from '../../components/CollapsingElement'
import './About.scss'


function About() {

    const tFiab = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const tResp = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const tServ = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const tSecu = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
      <div className="about-wrapper">
        <Banner image={paysageMontagne}></Banner>
        <div className='valeurs'>
        <CollapsingElement titre={'Fiabilité'} texte={tFiab}></CollapsingElement>
        <CollapsingElement titre={'Respect'} texte={tResp}></CollapsingElement>
        <CollapsingElement titre={'Service'} texte={tServ}></CollapsingElement>
        <CollapsingElement titre={'Sécurité'} texte={tSecu}></CollapsingElement>
        </div>
      </div>
    )
  }
  
  export default About