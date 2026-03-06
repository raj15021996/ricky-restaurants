import CateringComponent from '@/components/catering';
import { getTogetherCateringSection, getTogetherData } from '@/utils/constant';

const GetTogetherPage = () => <CateringComponent data={getTogetherData} commonData={getTogetherCateringSection} />;

export default GetTogetherPage;
