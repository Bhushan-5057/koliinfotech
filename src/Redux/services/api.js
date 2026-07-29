const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const error = new Error(
      (data && data.message) || response.statusText || "Request failed"
    );
    error.response = { data, status: response.status };
    throw error;
  }

  // Match axios shape used by sagas: response.data
  return { data, status: response.status };
}

export const getAllEmployeeAPI = async () => request(`${baseUrl}employees/`);


export const createApplyJobAPI = async (data) => {
  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;
  return request(`${baseUrl}applications/`, {
    method: "POST",
    body: isFormData ? data : JSON.stringify(data),
  });
};
