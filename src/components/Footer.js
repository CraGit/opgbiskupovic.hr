"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import { usePathname } from "next/navigation";

export function Footer({ settings, navigation }) {
  const data = settings?.data || {};
  const pathname = usePathname();

  // Determine current locale from pathname
  const currentLocale = pathname.startsWith("/hr") ? "/hr" : "";

  return (
    <footer className="h-auto w-full p-4 pt-0 lg:pt-32 border-0 border-white bg-[#7C7669]">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 h-auto py-8 md:py-32 max-w-2xl mx-auto">
          <div className="flex items-center sm:items-start justify-center flex-col w-full h-full">
            <span className="text-base text-white tracking-wide pb-8 max-sm:text-center">
              Trebate našu pomoć?
            </span>
            <h2 className="heading text-white">Spremni smo!</h2>
          </div>
          <div className="flex items-start justify-center flex-col w-full h-full">
            <Link
              href="/contact"
              className="w-48 h-12 px-1 rounded-full max-sm:mx-auto outline-0 border-none relative z-20 bg-transparent flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10 text-white font-raleway px-4 font-semibold text-sm whitespace-nowrap">
                KONTAKTIRAJTE NAS
              </span>
              <svg
                className="relative z-10"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute h-12 w-12 aspect-square rounded-full -z-0 top-0 right-0 bg-s_skin transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10 border-t border-white border-opacity-20">
          <ul className="flex flex-col max-sm:items-center gap-8">
            <li>
              <Link href={`${currentLocale}`} className="py-1.5">
                {prismic.isFilled.image(data.logo_white) ? (
                  <PrismicNextImage
                    field={data.logo_white}
                    alt="OPG Biskupović logo"
                  />
                ) : (
                  prismic.isFilled.image(data.logo) && (
                    <PrismicNextImage
                      field={data.logo}
                      alt="OPG Biskupović logo"
                      className="invert"
                    />
                  )
                )}
              </Link>
            </li>
            <li className="text-sm text-white text-opacity-80 leading-8 max-sm:text-center">
              {data.footer_description ||
                "OPG Biskupović je obiteljsko poljoprivredno gospodarstvo koje se bavi uzgojem maslina i proizvodnjom maslinovog ulja."}
            </li>
            <li className="text-sm text-white text-opacity-80 leading-8">
              {new Date().getFullYear()}{" "}
              <Link href={`${currentLocale}`} className="hover:text-white">
                OPG Biskupović
              </Link>{" "}
              <br />
              Sva prava pridržana
            </li>
          </ul>
          <ul className="flex max-sm:items-center flex-col gap-5">
            <li className="text-white text-lg mb-2.5 capitalize font-semibold tracking-wide">
              Menu
            </li>
            {navigation?.data?.links.map((item) => (
              <li key={prismic.asText(item.label)}>
                <PrismicNextLink
                  field={item.link}
                  className="font-raleway text-white text-opacity-80 text-sm font-medium transition-all duration-500 hover:text-white"
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          <ul className="flex max-sm:items-center flex-col gap-5">
            <li className="text-white text-lg mb-2.5 capitalize font-semibold tracking-wide">
              Kontakt
            </li>
            {data.email && (
              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="font-raleway text-white text-opacity-80 text-sm font-medium transition-all duration-500 hover:text-white"
                >
                  {data.email}
                </a>
              </li>
            )}
            {data.phone_number && (
              <li>
                <a
                  href={`tel:${data.phone_number.replace(/\s+/g, "")}`}
                  className="font-raleway text-white text-opacity-80 text-sm font-medium transition-all duration-500 hover:text-white"
                >
                  {data.phone_number}
                </a>
              </li>
            )}
            {data.address && (
              <li className="font-raleway text-white text-opacity-80 text-sm font-medium">
                {data.address}
              </li>
            )}
            <li>
              <ul className="flex items-center gap-2.5">
                {data.facebook && (
                  <li>
                    <a
                      href={data.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-500 hover:bg-s_skin"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.4314 10.1834L12.7739 8.03988H10.6645V6.64657C10.6645 6.06044 10.959 5.4877 11.9007 5.4877H12.8732V3.66233C12.3068 3.57335 11.7346 3.52522 11.161 3.51831C9.4249 3.51831 8.29146 4.54655 8.29146 6.40541V8.03988H6.367V10.1834H8.29146V15.3682H10.6645V10.1834H12.4314Z"
                          fill="#111827"
                        />
                      </svg>
                    </a>
                  </li>
                )}
                {data.instagram && (
                  <li>
                    <a
                      href={data.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-500 hover:bg-s_skin"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.43179 9.44337C7.43179 8.25215 8.41139 7.28621 9.62011 7.28621C10.8288 7.28621 11.809 8.25215 11.809 9.44337C11.809 10.6346 10.8288 11.6005 9.62011 11.6005C8.41139 11.6005 7.43179 10.6346 7.43179 9.44337ZM6.24853 9.44337C6.24853 11.2785 7.75799 12.7661 9.62011 12.7661C11.4822 12.7661 12.9917 11.2785 12.9917 9.44337C12.9917 7.60821 11.4822 6.12061 9.62011 6.12061C7.75799 6.12061 6.24853 7.60821 6.24853 9.44337ZM12.3372 5.98886C12.3372 6.14244 12.3833 6.29259 12.4699 6.42032C12.5564 6.54806 12.6794 6.64763 12.8234 6.70646C12.9673 6.76529 13.1257 6.78073 13.2786 6.75083C13.4314 6.72093 13.5719 6.64703 13.6821 6.53847C13.7923 6.42992 13.8674 6.29159 13.8979 6.14097C13.9284 5.99035 13.9128 5.83421 13.8532 5.6923C13.7937 5.55039 13.6927 5.42907 13.5632 5.3437C13.4336 5.25832 13.2813 5.21272 13.1255 5.21266H13.1252C12.9163 5.21275 12.716 5.29455 12.5682 5.44009C12.4205 5.58563 12.3374 5.783 12.3372 5.98886V5.98886ZM6.96743 14.7106C6.32727 14.6818 5.97933 14.5768 5.7481 14.488C5.44154 14.3704 5.22281 14.2303 4.99284 14.0039C4.76288 13.7776 4.62052 13.5623 4.5017 13.2602C4.41157 13.0324 4.30493 12.6894 4.27583 12.0585C4.244 11.3764 4.23764 11.1715 4.23764 9.44342C4.23764 7.71537 4.24453 7.51104 4.27583 6.82838C4.30499 6.19749 4.41241 5.85515 4.5017 5.6267C4.62105 5.32458 4.76319 5.10902 4.99284 4.88238C5.2225 4.65574 5.44102 4.51545 5.7481 4.39835C5.97922 4.30952 6.32727 4.20443 6.96743 4.17575C7.65955 4.14438 7.86745 4.13812 9.62011 4.13812C11.3728 4.13812 11.5809 4.1449 12.2736 4.17575C12.9137 4.20448 13.2611 4.31035 13.4929 4.39835C13.7995 4.51545 14.0182 4.65605 14.2482 4.88238C14.4781 5.10871 14.62 5.32458 14.7393 5.6267C14.8294 5.85447 14.9361 6.19749 14.9652 6.82838C14.997 7.51104 15.0034 7.71537 15.0034 9.44342C15.0034 11.1715 14.997 11.3758 14.9652 12.0585C14.936 12.6894 14.8289 13.0323 14.7393 13.2602C14.62 13.5623 14.4778 13.7778 14.2482 14.0039C14.0185 14.2301 13.7995 14.3704 13.4929 14.488C13.2618 14.5768 12.9137 14.6819 12.2736 14.7106C11.5815 14.7419 11.3736 14.7482 9.62011 14.7482C7.86667 14.7482 7.65934 14.7419 6.96743 14.7106V14.7106ZM6.91307 3.0116C6.21407 3.04297 5.73643 3.1522 5.31931 3.31216C4.88731 3.47735 4.52161 3.69897 4.15617 4.05855C3.79073 4.41813 3.56644 4.7791 3.39882 5.20484C3.23651 5.61619 3.12567 6.08665 3.09384 6.77552C3.06148 7.46548 3.05408 7.68607 3.05408 9.44337C3.05408 11.2007 3.06148 11.4213 3.09384 12.1112C3.12567 12.8001 3.23651 13.2706 3.39882 13.6819C3.56644 14.1074 3.79079 14.4688 4.15617 14.8282C4.52156 15.1876 4.88731 15.4089 5.31931 15.5746C5.73722 15.7345 6.21407 15.8438 6.91307 15.8751C7.61353 15.9065 7.83699 15.9143 9.62011 15.9143C11.4032 15.9143 11.6271 15.907 12.3272 15.8751C13.0262 15.8438 13.5035 15.7345 13.9209 15.5746C14.3527 15.4089 14.7186 15.1878 15.0841 14.8282C15.4495 14.4686 15.6733 14.1074 15.8414 13.6819C16.0037 13.2706 16.1151 12.8001 16.1464 12.1112C16.1782 11.4207 16.1856 11.2007 16.1856 9.44337C16.1856 7.68607 16.1782 7.46548 16.1464 6.77552C16.1146 6.0866 16.0037 5.61593 15.8414 5.20484C15.6733 4.77936 15.4489 4.4187 15.0841 4.05855C14.7192 3.6984 14.3527 3.47735 13.9214 3.31216C13.5035 3.1522 13.0262 3.04245 12.3277 3.0116C11.6276 2.98023 11.4038 2.97241 9.62064 2.97241C7.83751 2.97241 7.61353 2.97971 6.91307 3.0116Z"
                          fill="#111827"
                        />
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
