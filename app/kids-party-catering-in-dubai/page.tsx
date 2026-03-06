import CateringComponent from '@/components/catering';
import { KidsCateringSection, kidsData } from '@/utils/constant';

const KidsPage = () => <CateringComponent data={kidsData} commonData={KidsCateringSection} />;

export default KidsPage;
