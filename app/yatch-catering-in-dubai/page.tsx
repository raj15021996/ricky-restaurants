import CateringComponent from '@/components/catering';
import { cateringDataforWedding, YachtCateringSection, yatchData  } from '@/utils/constant';

const YatchPage = () => <CateringComponent data={yatchData} cateringData={cateringDataforWedding} commonData={YachtCateringSection} />;

export default YatchPage;
