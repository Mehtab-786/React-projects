function CustomerForm({ setInput, service, setService, input, handleSubmit }) {
  return (
    <div className="w-full h-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col gap-6">
      <h2 className="text-lg font-semibold border-b border-neutral-800 pb-2">
        Add Customer to Queue
      </h2>

      <div className="flex flex-col gap-4">
        {/* Customer Name */}
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-neutral-300">Customer Name</span>
          <input
            type="text"
            placeholder="Enter customer name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-neutral-500"
          />
        </label>
        {/* Service Select */}
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-neutral-300">Service Type</span>
          <select
            className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="Payment">Payment</option>
            <option value="Consultation">Consultation</option>
            <option value="Support">Support</option>
          </select>
        </label>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-indigo-500 active:bg-indigo-700"
        >
          Add to Queue
        </button>
      </div>
    </div>
  );
}

export default CustomerForm;
