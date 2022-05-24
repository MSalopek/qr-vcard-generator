import { useState } from "react";
import VCards from "vcards-js";
import QRCode from "react-qr-code";

export default function Home() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [title, setTitle] = useState();
  const [organization, setOrganization] = useState();
  const [url, setUrl] = useState();
  const [email, setEmail] = useState();
  const [workPhone, setWorkPhone] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [homePhone, setHomePhone] = useState();
  const [workFax, setWorkFax] = useState();

  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [stateProvince, setStateProvince] = useState();
  const [postalCode, setPostalCode] = useState();
  const [countryRegion, setCountryRegion] = useState();

  const [cardString, setCardString] = useState();

  const [dlHref, setdlHref] = useState();
  const [filename, setFilename] = useState();

  const makeCard = () => {
    var vcard = VCards();
    vcard.firstName = firstName;
    vcard.lastName = lastName;
    vcard.title = title;
    vcard.organization = organization;
    vcard.url = url;
    vcard.email = email;
    vcard.workPhone = workPhone;
    vcard.cellPhone = cellPhone;
    vcard.homePhone = homePhone;
    vcard.workFax = workFax;
    vcard.workAddress.street = street;
    vcard.workAddress.city = city;
    vcard.workAddress.stateProvince = stateProvince;
    vcard.workAddress.postalCode = postalCode;
    vcard.workAddress.countryRegion = countryRegion;

    console.log(vcard.getFormattedString());
    setCardString(vcard.getFormattedString());
    setShow(true);
  };

  const clear = () => {
    vcard.firstName = null;
    vcard.lastName = null;
    vcard.title = null;
    vcard.organization = null;
    vcard.url = null;
    vcard.email = null;
    vcard.workPhone = null;
    vcard.cellPhone = null;
    vcard.homePhone = null;
    vcard.workFax = null;
    vcard.workAddress.street = null;
    vcard.workAddress.city = null;
    vcard.workAddress.stateProvince = null;
    vcard.workAddress.postalCode = null;
    vcard.workAddress.countryRegion = null;
    setShow(false);
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <section className="w-full container mx-auto flex flex-row md:flex-col lg:flex-row sm:flex-col items-center justify-between gap-8">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="mt-10 text-2xl font-bold">Generate vCard QR Code</h1>
          <p className="mb-4 w-1/2 p-4 text-center">
            The values you input will be used to create a vCard in QR form. You
            can use the QR code to import contacts into your phone.
          </p>
          <div className="block rounded-lg bg-white p-6 shadow-lg">
            <form className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pb-10 ">
              <h1 className="text-lg font-semibold -mb-3">
                Contact Information
              </h1>
              <hr className="col-span-1 md:col-span-2 lg:col-span-3" />
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Title (Role)
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Phone (work)
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Phone (work)"
                  value={workPhone}
                  onChange={(e) => setWorkPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Phone (home)
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Phone (home)"
                  value={homePhone}
                  onChange={(e) => setHomePhone(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Phone (cell)
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Phone (cell)"
                  value={cellPhone}
                  onChange={(e) => setCellPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Fax
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Fax"
                  value={workFax}
                  onChange={(e) => setWorkFax(e.target.value)}
                />
              </div>
              <h1 className="text-lg font-semibold -mb-3">Address</h1>
              <hr className="col-span-1 md:col-span-2 lg:col-span-3" />

              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Street
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Postcode
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Postcode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Province/state
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Province/state"
                  value={stateProvince}
                  onChange={(e) => setStateProvince(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Country"
                  value={countryRegion}
                  onChange={(e) => setCountryRegion(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label mb-2 inline-block text-gray-700">
                  Website (URL)
                </label>
                <input
                  type="text"
                  className="block w-full rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none"
                  placeholder="Website (URL)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </form>
            <button
              type="submit"
              onClick={() => makeCard()}
              className="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Generate
            </button>
            <button
              onClick={() => clear()}
              className="w-full mt-4 rounded bg-blue-200 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Clear
            </button>
          </div>
        </div>
        {show && (
          <div
            className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg"
            id="svg-qr-code"
          >
            <QRCode value={cardString} />
            <a
              href={dlHref}
              download={filename}
              onClick={() => {
                if (!show) {
                  return;
                }
                const svg = document.querySelector("#svg-qr-code > svg");
                setdlHref(
                  "data:image/svg+xml," + encodeURIComponent(svg.outerHTML)
                );
                setFilename(`${firstName}-${lastName}-QR.svg`);
              }}
              className="rounded text-center bg-blue-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white hover:bg-blue-400 focus:outline-none focus:ring-0"
            >
              Download
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

function QR({ cardString }) {}
