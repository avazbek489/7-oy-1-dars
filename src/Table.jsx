import React from "react";
import clear from "./delete.svg";
import edit from "./edit.svg";
import three from "./three.svg";

function Table({ table, handleDelete }) {
  return (
    <table className="table w-full mt-4">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              className="rounded-[4px] border-[#333] checkbox"
            />
          </th>
          <th className="text-sm font-semibold text-[#606F89">Name</th>
          <th className="text-sm font-semibold text-[#606F89">Description</th>
          <th className="text-sm font-semibold text-[#606F89">Rate</th>
          <th className="text-sm font-semibold text-[#606F89">Balance</th>
          <th className="text-sm font-semibold text-[#606F89">Deposit</th>
          <th className="text-sm font-semibold text-[#606F89]">Status</th>
          <th className="text-sm font-semibold text-[#606F89]">Actions</th>
          <th className="text-sm font-semibold text-[#606F89]">
            <img src={three} alt="" />
          </th>
        </tr>
      </thead>
      <tbody>
        {table.map((value, index) => (
          <tr
            key={index}
            className={`${index % 2 == 0 ? "bg-white" : "bg-[#F4F7FC]"}`}
          >
            <td>
              <input
                type="checkbox"
                className="rounded-[4px] border-[#333] checkbox"
              />
            </td>
            <td>
              <h3 className="font-medium text-base inline-block">
                {value.name}
              </h3>
              <br /> 5684236583
            </td>
            <td>
              <p className="w-40 inline-block h-[40px] line-clamp-2 font-semibold text-sm">
                {value.description}
              </p>
            </td>
            <td>
              <h4 className="font-normal text-base inline-block">
                {value.rate}
              </h4>
              <br />
              <span className="text-[#606F89] font-normal">INR</span>
            </td>
            <td
              className={
                value.balance < 0 ? "text-[#ff0000]" : "text-[#00CC13]"
              }
            >
              <h4 className="font-normal text-base inline-block">
                {value.balance}
              </h4>
              <br />
              <span className="text-[#606F89] font-normal">INR</span>
            </td>
            <td>
              <h6 className="font-normal text-base inline-block">
                {value.deposit}
              </h6>
              <br />
              <span className="text-[#606F89] font-normal">INR</span>
            </td>

            <td>
              <span
                className={`badge ${
                  value.status == "ACTIVE"
                    ? "bg-[#0A65FF] text-white p-[4px 5px] hover:bg-blue-800 cursor-pointer"
                    : "border border-[#606F89] p-[4px 5px] text-[#606F89] hover:bg-slate-200 cursor-pointer"
                }`}
              >
                {value.status}
              </span>
            </td>
            <td className="flex items-center mt-4  gap-[25px]">
              <button>
                <img src={edit} alt="" />
              </button>
              <button onClick={() => handleDelete(index)}>
                <img src={clear} alt="" />
              </button>
            </td>
            <td>
              <img src={three} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
