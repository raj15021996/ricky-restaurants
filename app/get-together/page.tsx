import CateringComponent from '@/components/catering';
import { cateringDataforWedding, weddingData } from '@/utils/constant';

const WeddingPage = () => <CateringComponent data={weddingData} cateringData={cateringDataforWedding} commonData={null} />;

export default WeddingPage;
