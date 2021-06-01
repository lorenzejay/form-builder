import React from "react";
import Layout from "../components/Layout";
import { FaShare, FaEllipsisH } from "react-icons/fa";
import Modal from "../components/Modal";
import Link from "next/link";
const Forms = () => {
  return (
    <Layout mainBgColor="">
      <div className="flex justify-between w-full">
        <h3 className="text-3xl">Forms</h3>
        <Modal modalButtonName="Create New Form">
          <h3 className=" text-2xl text-gray-600 p-4 border-b">
            How would you like to create your form?
          </h3>
          <div className="flex justify-around pt-5 bg-gray-50">
            <Link href="/build">
              <div className="flex flex-col bg-white text-gray-500 hover:bg-gray-300 p-4 cursor-pointer rounded-md shadow-2xl">
                <img src="/formbuilder-1.svg" alt="form-builder" className="w-48" />
                <p className="text-center">Start from scratch</p>
              </div>
            </Link>
            <Link href="/build">
              <div className="flex flex-col bg-white text-gray-500 hover:bg-gray-300 p-4 cursor-pointer rounded-md shadow-2xl">
                <img src="/formbuilder-1.svg" alt="form-builder" className="w-48" />
                <p className="text-center">Use a template</p>
              </div>
            </Link>
          </div>
        </Modal>
      </div>

      <section className="bg-gray-50">
        <table className="table-fixed w-full my-5">
          <thead className="bg-gray-300 ">
            <tr className="p-2">
              <th className="w-1/12">[]</th>
              <th className="w-1/4">Name</th>
              <th className="w-1/12">Today</th>
              <th className="w-1/12">All Entries</th>
              <th className="w-1/12">Share</th>
              <th className="w-1/12">More</th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-2">
              <td className=" flex justify-center items-center">
                <input type="checkbox" />
              </td>

              <td className="">Form 1 Name</td>

              <td className="text-center">0</td>

              <td className="text-center">12</td>

              <td className="text-center">
                <FaShare />
              </td>
              <td className="text-center">
                <FaEllipsisH />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Forms;
