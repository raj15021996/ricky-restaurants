import CateringComponent from '@/components/catering';
import { specialCateringSection, specialData } from '@/utils/constant';

const SpecialPage = () => <CateringComponent data={specialData} commonData={specialCateringSection} />;

export default SpecialPage;
