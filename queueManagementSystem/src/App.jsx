import { useState } from "react";
import CustomerData from "./components/CustomerData";
import CustomerForm from "./components/CustomerForm";

export default function App() {
  const [input, setInput] = useState("");
  const [service, setService] = useState("");
  const [customerList, setCustomerList] = useState(
    JSON.parse(localStorage.getItem("customerData")) || []
  );

  const handleSubmit = () => {
    let newCustomer = [...customerList,{
      status: false,
        isOnList: true,
        isServed: false,
        name: input,
        service: service,
    }]
    setCustomerList(newCustomer);
    localStorage.setItem("customerData", JSON.stringify(newCustomer));
    setService("");
    setInput("");
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-neutral-950/60 border border-neutral-800 rounded-2xl shadow-xl p-8 space-y-6">
        {/* Main Header */}
        <header className="flex flex-col gap-2 border-b border-neutral-800 pb-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Queue Management System
          </h1>
          <p className="text-sm text-neutral-400">
            Add customers to the queue and manage their status in real-time.
          </p>
        </header>

        <div className="grid  md:grid-cols-2 gap-6">
          <CustomerForm
            {...{ setInput, service, setService, input, handleSubmit }}
          />
          <CustomerData {...{ customerList, setCustomerList }} />
        </div>
      </div>
    </div>
  );
}
