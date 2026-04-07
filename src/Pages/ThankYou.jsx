import React from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function ThankYou() {
  const [searchParams] = useSearchParams();

  const txRef = searchParams.get("tx_ref");
  const status = searchParams.get("status");

  return (
    <section className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Thank You
        </h1>

        <p className="mb-4 text-gray-700">
          Your payment has been received for processing.
        </p>

        {status && (
          <p className="mb-2 text-sm text-gray-600">
            <strong>Status:</strong> {status}
          </p>
        )}

        {txRef && (
          <p className="mb-6 text-sm text-gray-600">
            <strong>Reference:</strong> {txRef}
          </p>
        )}

        <p className="mb-6 text-sm text-gray-500">
          Final confirmation should come from the verified backend record, not this page alone.
        </p>

        <Link
          to="/"
          className="inline-block rounded-2xl bg-black px-5 py-3 text-white"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}