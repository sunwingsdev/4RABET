import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import ReasonModal from "../../../components/dashboard/deposit-history/ReasonModal";
import { useGetDepositsQuery } from "../../../redux/features/allApis/depositsApi/depositsApi";
import { Link } from "react-router";

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
    console.log(
      `Deposit ID: ${selectedDeposit?._id}, Status: ${status}, Reason: ${reason}`
    );
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
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-[#172437]">
          <thead className="text-xs text-gray-700 uppercase bg-[#172437] dark:bg-[#172437] dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Deposit Method</th>
              <th className="px-6 py-3">Sender Inputs</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Slip</th>
              <th className="px-6 py-3">Time & Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {allDeposits?.map((deposit, index) =>
              deposit?.paymentInputs?.map((input, inputIndex) => (
                <tr
                  key={`${deposit?._id}-${inputIndex}`}
                  className={`border-b border-gray-700 ${
                    index % 2 === 0
                      ? "bg-white text-black"
                      : "bg-[#223550] text-white"
                  }`}
                >
                  {inputIndex === 0 && (
                    <>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        {deposit?.userInfo?.name || "N/A"}
                      </td>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-6 py-4"
                      >
                        {deposit?.method || "N/A"}
                      </td>
                    </>
                  )}
                  <td className="px-6 py-4 inline-flex flex-col">
                    {Object.entries(input || {}).map(([key, value]) => {
                      const isImage =
                        typeof value === "string" &&
                        /\.(jpg|jpeg|png|gif)$/i.test(value);

                      if (isImage) {
                        return (
                          <Link
                            target="_blank"
                            rel="noreferrer noopener"
                            to={`${import.meta.env.VITE_BASE_API_URL}${value}`}
                            key={key}
                          >
                            <img
                              src={`${
                                import.meta.env.VITE_BASE_API_URL
                              }${value}`}
                              alt="Deposit Screenshot"
                              className="w-full h-24 object-cover rounded"
                            />
                          </Link>
                        );
                      }
                      return (
                        <span key={key} className="font-bold capitalize">
                          {key}: {value || "N/A"}
                        </span>
                      );
                    })}
                  </td>

                  {inputIndex === 0 && (
                    <>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-6 py-4"
                      >
                        {deposit?.amount || "N/A"}
                      </td>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-6 py-4"
                      >
                        <IoCloudUploadOutline className="text-2xl cursor-pointer" />
                      </td>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-6 py-4"
                      >
                        {deposit?.createdAt
                          ? new Date(deposit.createdAt).toLocaleString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )
                          : "N/A"}
                      </td>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-6 py-4 text-center flex flex-col items-center gap-2"
                      >
                        {deposit?.status === "pending" ? (
                          <>
                            <button
                              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                              onClick={() =>
                                handleStatusClick(deposit, "completed")
                              }
                            >
                              Complete
                            </button>
                            <button
                              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                              onClick={() =>
                                handleStatusClick(deposit, "reject")
                              }
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span
                            className={`rounded-full border px-3 py-1 capitalize ${
                              deposit?.status === "completed"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {deposit?.status}
                          </span>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
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
      <ReasonModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        status={status}
        deposit={selectedDeposit}
      />
    </div>
  );
};

export default DepositHistory;
