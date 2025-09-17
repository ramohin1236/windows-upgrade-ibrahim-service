"use client";

import { useState } from "react";
import { ChevronLeft, Edit } from "lucide-react";

const SecuritySettings = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      nickName: "Theodora Mosciski",
      account: "stripe",
      accountNumber: "**** **** **** 8567",
      status: "Connected",
      isConnected: true,
    },
  ]);

  const handleEdit = (accountId) => {
    console.log("Edit account:", accountId);
    // Add edit functionality here
  };

  const handleDisconnect = (accountId) => {
    setAccounts(
      accounts.map((acc) =>
        acc.id === accountId
          ? { ...acc, status: "Disconnected", isConnected: false }
          : acc
      )
    );
  };

  const handleConnect = (accountId) => {
    setAccounts(
      accounts.map((acc) =>
        acc.id === accountId
          ? { ...acc, status: "Connected", isConnected: true }
          : acc
      )
    );
  };
  return (
    <div className=" bg-gray-50 p-4 md:p-6 lg:p-8">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Security Settings
          </h1>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                    Nick Name
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                    Account
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                    Account Number
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr
                    key={account.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm text-gray-900">
                      {account.nickName}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-blue-600">
                        {account.account}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">
                      {account.accountNumber}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          account.isConnected
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {account.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(account.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                        >
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                        {account.isConnected ? (
                          <button
                            onClick={() => handleDisconnect(account.id)}
                            className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          >
                            Disconnect
                          </button>
                        ) : (
                          <button
                            onClick={() => handleConnect(account.id)}
                            className="px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-50 rounded-md transition-colors"
                          >
                            Connect
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="p-4 border-b border-gray-100 last:border-b-0"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {account.nickName}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 mt-1">
                        {account.account}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        account.isConnected
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {account.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Account Number</p>
                    <p className="text-sm text-gray-600">
                      {account.accountNumber}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => handleEdit(account.id)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Edit className="w-3 h-3" />
                      Edit
                    </button>
                    {account.isConnected ? (
                      <button
                        onClick={() => handleDisconnect(account.id)}
                        className="flex-1 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors text-center"
                      >
                        Disconnect
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConnect(account.id)}
                        className="flex-1 px-3 py-2 text-xs font-medium text-green-600 hover:bg-green-50 rounded-md transition-colors text-center"
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
