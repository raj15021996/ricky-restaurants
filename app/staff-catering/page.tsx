import CateringComponent from '@/components/catering';
import { staffCateringSection, staffData } from '@/utils/constant';

const StaffPage = () => <CateringComponent data={staffData} commonData={staffCateringSection} />;

export default StaffPage;
