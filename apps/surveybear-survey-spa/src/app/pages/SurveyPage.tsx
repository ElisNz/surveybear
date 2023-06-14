import { useParams } from 'react-router-dom';
<<<<<<< HEAD

const SurveyPage = () => {
    const { surveyId } = useParams();
=======
import { getSurveyById } from '../../api/getSurveyById';

const SurveyPage = () => {
    const { surveyId } = useParams();
    const [ survey, setSurvey ] = useState<ISurvey>();

    useEffect(() => {
        if(surveyId){
            getSurveyById(surveyId).then(survey => setSurvey(survey));
        } else {
            // Visa att det inte finns nåt id
        }
    }, [])

>>>>>>> parent of 6be9a6c (small fixes)
    return (<>
        <h1>Survey</h1>
        <p>{surveyId}</p>
    </>)
}

export default SurveyPage;