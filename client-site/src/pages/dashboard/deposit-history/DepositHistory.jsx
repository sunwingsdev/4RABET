import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import ReasonModal from "../../../components/dashboard/deposit-history/ReasonModal";
import { useGetDepositsQuery } from "../../../redux/features/allApis/depositsApi/depositsApi";

const DepositHistory = () => {
  const { data: allDeposits, isLoading, isError } = useGetDepositsQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [status, setStatus] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading deposits.</div>;

  const handleStatusClick = (deposit, status) => {
    setSelectedDeposit(deposit);
    setStatus(status);
    setModalOpen(true);
  };

  const handleSubmit = (reason) => {
    console.log(`Status: ${status}, Reason: ${reason}`);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#172437] flex flex-row items-center justify-between p-4 mb-2">
        <h1 className="text-2xl text-white font-bold">Deposit History</h1>
        <form className="w-1/2 md:w-1/4 flex flex-row items-center">
          <input
            type="text"
            placeholder="Type Account User Name or Account Number..."
            className="py-2 px-1 w-full outline-none"
          />

          <button className="bg-white p-3">
            <IoIosSearch />
          </button>
        </form>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#172437] dark:bg-[#172437] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Deposit Method
              </th>
              <th scope="col" className="px-6 py-3">
                Sender A/C Number
              </th>
              <th scope="col" className="px-6 py-3">
                TRXID
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Slip
              </th>
              <th scope="col" className="px-6 py-3">
                Time & Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {allDeposits?.map((deposit, index) => (
              <tr
                key={index}
                className={`border-b border-gray-700 ${
                  index % 2 === 0
                    ? "bg-white text-black"
                    : "bg-[#223550] text-white"
                }`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {deposit?.userInfo?.fullName}
                </th>
                <td className="px-6 py-4">{deposit?.method}</td>
                <td className="px-6 py-4">{deposit?.senderAccountNumber}</td>
                <td className="px-6 py-4 uppercase">
                  {deposit?.transactionId}
                </td>
                <td className="px-6 py-4 uppercase">{deposit?.amount}</td>
                <td className="px-6 py-4">
                  <IoCloudUploadOutline className="text-2xl cursor-pointer" />
                </td>
                <td className="px-6 py-4">
                  {new Date(deposit?.createdAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className={`px-4 py-2 font-bold rounded capitalize ${
                      deposit?.status === "pending"
                        ? "bg-yellow-500 text-black hover:bg-yellow-600"
                        : deposit?.status === "approve"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : deposit?.status === "reject"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : ""
                    }`}
                    onClick={() => handleStatusClick(deposit, deposit?.status)}
                  >
                    {deposit?.status}
                  </button>
                </td>
              </tr>
            ))}
            {allDeposits?.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-white">
                  No deposits found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Reason Modal */}
      <ReasonModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
};

export default DepositHistory;
