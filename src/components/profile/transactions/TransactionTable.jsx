import React from "react";

const TransactionTable = ({ transactions }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "text-green-600";
      case "in progress":
        return "text-blue-600";
      case "pending":
        return "text-yellow-600";
      case "cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 rounded border-dashed"></div>
        </div>
        <p className="text-gray-500 text-lg">No Transaction Found</p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="space-y-1">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={transaction.avatar}
                  alt={transaction.providerName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {transaction.providerName}
                  </h3>
                  <p className="text-sm text-gray-500">{transaction.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ₦{transaction.amount}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm font-medium ${getStatusColor(
                    transaction.status
                  )}`}
                >
                  {transaction.status}
                </span>
                <span className="text-sm text-gray-500">
                  {transaction.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Provider Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Service
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Date
              </th>
              <th className="text-right py-3 px-4 font-medium text-gray-900">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={transaction.avatar}
                      alt={transaction.providerName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-900">
                      {transaction.providerName}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700">
                  {transaction.service}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`font-medium ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-700">{transaction.date}</td>
                <td className="py-4 px-4 text-right font-semibold text-gray-900">
                  ₦{transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
