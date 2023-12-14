import Sidebar from "../Adminpanel/adminnav";
import ScholarshipForm from "../Adminpanel/Website";
export default function AdminBar({ handleLogout }) {
  return (
    <>
      <Sidebar handleLogout={handleLogout} />
      <ScholarshipForm />
    </>
  )
}