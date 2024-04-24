import ProviderFaces from '../../ProviderPricing/providersFaces'
import Questions from '../../../Main/questions/Questions'
import MedWork from '../../../Main/medWorkStepper/MedWork'
import CardSLeft from '../../../pricing/solution/CardSLeft'

export default function DefaultSlider({card}){
    return(
        <>
        <MedWork/>
        <CardSLeft  
                ques={card.ques}
                typ1={card.typ1}
                typ2={card.typ2}
                typ3={card.typ3}
                typ4={card.typ4}/>
        <ProviderFaces/>
        <Questions/>
        
        </>
    )
}