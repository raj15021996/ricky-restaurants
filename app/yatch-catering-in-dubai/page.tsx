import CateringComponent from '@/components/catering';
import { YachtCateringSection, yatchData  } from '@/utils/constant';

const YatchPage = () => <CateringComponent data={yatchData} commonData={YachtCateringSection} />;

export default YatchPage;
