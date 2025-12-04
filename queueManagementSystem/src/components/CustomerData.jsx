import { CheckCircle2, PlayCircle, Trash2 } from "lucide-react";

function CustomerData({ customerList, setCustomerList }) {
  const workDoneHandler = (item) => {
    let newList = customerList.map((val) => {
      if (item == val) {
        val.isServed = true;
        val.status = true; // your new logic to update status
      }
      return val;
    });
    setCustomerList(newList);
    localStorage.setItem("customerData", JSON.stringify(newList));
  };

  function removeCustomer(customer) {
    let newList = customerList.filter((item) => item != customer);
    setCustomerList(newList);
    localStorage.setItem("customerData", JSON.stringify(newList));
  }

  return (
    <div className="w-full h-full  bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
        <div>
          <h2 className="text-lg font-semibold">Customer Queue</h2>
          <p className="text-xs text-neutral-400">
            Manage serving and removal of customers in the queue.
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
          Total: {customerList?.filter((c) => c.isOnList).length || 0}
        </span>
      </div>

      <div className="w-full h-full overflow-y-scroll space-y-3">
        {customerList?.filter((customer) => customer.isOnList).length === 0 && (
          <p className="text-sm text-neutral-500">
            No customers in the queue right now.
          </p>
        )}

        {customerList
          ?.filter((customer) => customer.isOnList)
          .map((customer, idx) => (
            <div
              className="flex w-full items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 hover:border-neutral-600 transition"
              key={idx}
            >
              {/* Left side: basic info */}
              <div className="space-y-1">
                <h3 className="text-sm font-medium">{customer.name}</h3>
                <p className="text-xs text-neutral-400">
                  Service:{" "}
                  <span className="text-neutral-200">{customer.service}</span>
                </p>

                {/* Status pill (using your boolean status) */}
                <span
                  className={[
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                    customer.status
                      ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                      : "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
                  ].join(" ")}
                >
                  {customer.status ? "Pending" : "Success"}
                </span>
              </div>

              {/* Right side: actions */}
              <div className="flex items-center gap-2">
                {customer.isServed ? (
                  <button
                    onClick={() => removeCustomer(customer)}
                    className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium shadow-sm transition hover:bg-emerald-500 active:bg-emerald-700"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Completed</span>
                  </button>
                ) : (
                  <button
                    onClick={() => workDoneHandler(customer)}
                    className="inline-flex items-center gap-1 rounded-md bg-amber-500 px-3 py-1.5 text-xs font-medium text-black shadow-sm transition hover:bg-amber-400 active:bg-amber-600"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Serve</span>
                  </button>
                )}

                {/* Delete icon button (replacing "Present" text button) */}
                <button
                  onClick={() => removeCustomer(customer)}
                  className="inline-flex items-center justify-center rounded-md border border-red-500/40 bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition"
                  aria-label="Remove customer from queue"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CustomerData;
