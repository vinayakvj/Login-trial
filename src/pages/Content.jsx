import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "./content.css";
import { Container } from "../components/styles/Container.styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicCard from "../components/BasicCard";
import user from "../components/AxiosInstance";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    user
      .get("/student", {
        params: {
          _limit: 10,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="cont">
        <Container>
          <div>
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="37"
                  fill="#54A0FF"
                  fillOpacity="0.49"
                />
                <foreignObject x="15" y="15" width="44" height="44">
                  <div className="profile-pic">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_45_1001)">
                        <path
                          d="M9.07584 11.6883C9.43623 11.6883 9.72876 11.3957 9.72876 11.0353V5.15889H11.3814C11.7816 5.15889 12.0702 5.15889 12.5319 5.62051L14.4907 7.57864V7.57933L18.4083 11.497C18.5304 11.6191 18.6969 11.6883 18.8699 11.6883H23.4405C23.8016 11.6883 24.0934 11.3957 24.0934 11.0353C24.0934 10.675 23.8017 10.3824 23.4406 10.3824H19.1403L16.5285 7.77062H19.5229C19.8833 7.77062 20.1759 7.47810 20.1759 7.11771C20.1759 6.75732 19.8833 6.46479 19.5229 6.46479H15.2226L13.4551 4.69726C12.6108 3.85298 11.8711 3.85298 11.3814 3.85298H9.72876C9.00858 3.85298 8.42285 4.43864 8.42285 5.15889V11.0353C8.42293 11.3957 8.71545 11.6883 9.07584 11.6883Z"
                          fill="black"
                        />
                        <path
                          d="M39.4738 20.9391L33.7788 17.1423C32.0204 12.3412 26.5585 12.3412 24.7466 12.3412C21.7072 12.3412 19.7647 12.8890 19.3828 13.0065L9.34313 14.2614L5.67554 9.98401C5.60438 9.89127 4.94489 9.07645 3.85254 9.07645H1.24081C1.03582 9.07645 0.843149 9.17240 0.719728 9.33630C0.596307 9.49951 0.556519 9.71176 0.613294 9.90895L2.98676 18.2176H1.24081C0.880413 18.2176 0.587891 18.5102 0.587891 18.8705V21.4823C0.587891 21.8427 0.880413 22.1352 1.24081 22.1352H6.46435C6.82474 22.1352 7.11726 21.8427 7.11726 21.4823C7.11726 21.1219 6.82474 20.8294 6.46435 20.8294H1.8938V19.5235H3.85262C4.05760 19.5235 4.25027 19.4275 4.37369 19.2636C4.49711 19.1004 4.53690 18.8881 4.48013 18.6910L2.10666 10.3824H3.85262C4.31363 10.3824 4.64265 10.7826 4.66292 10.8074L8.58056 15.378C8.72288 15.5438 8.93774 15.6274 9.15711 15.6006L19.2202 14.3431C21.9521 18.1608 25.2567 18.2176 25.3996 18.2176H30.6232C30.9843 18.2176 31.2761 17.9251 31.2761 17.5647C31.2761 17.2043 30.9843 16.9118 30.6232 16.9118H25.4036C25.2933 16.9105 22.8591 16.8387 20.6254 14.0434C21.4749 13.8658 22.8937 13.6471 24.7467 13.6471C29.1769 13.6471 31.6777 14.9575 32.6160 17.7710C32.6617 17.9088 32.7525 18.0270 32.8726 18.1079L36.9548 20.8294H26.0525C25.8717 20.8294 25.6980 20.9051 25.5746 21.0376L12.8383 34.7325C12.3767 35.1941 12.0875 35.1941 11.6878 35.1941H9.729V22.1353H22.7878C23.1489 22.1353 23.4407 21.8427 23.4407 21.4824C23.4407 21.1220 23.1489 20.8294 22.7878 20.8294H9.07608C8.71569 20.8294 8.42317 21.1220 8.42317 21.4824V35.1941C8.42317 35.9143 9.00883 36.5000 9.72908 36.5000H11.6879C12.1776 36.5000 12.9174 36.5000 13.7779 35.6388L17.8353 31.2765H22.1349C22.4960 31.2765 22.7878 30.9840 22.7878 30.6236C22.7878 30.2632 22.4960 29.9706 22.1349 29.9706H19.0498L21.4787 27.3588H26.0525C26.4136 27.3588 26.7055 27.0663 26.7055 26.7059C26.7055 26.3455 26.4136 26.0530 26.0525 26.0530H22.6932L26.3366 22.1354H39.1114C39.3987 22.1354 39.6526 21.9467 39.7362 21.6717C39.8198 21.3962 39.7127 21.0991 39.4738 20.9391Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_1001">
                          <rect
                            width="39.1765"
                            height="39.1765"
                            fill="white"
                            transform="translate(0.587891 0.588257)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </foreignObject>
              </svg>
              <div className="card-content">
                <h2>Defence</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
            >
              <circle
                cx="37"
                cy="37"
                r="37"
                fill="#567F56"
                fill-opacity="0.49"
              />
              <foreignObject x="15" y="15" width="44" height="44">
                <div className="profile-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_45_1008)">
                      <path
                        d="M32.2012 29.2984C32.1673 27.9173 31.6903 26.5837 30.8406 25.4944C29.9908 24.4051 28.8134 23.6178 27.4821 23.2488C26.7414 23.0696 25.9854 22.9603 25.2243 22.9224C24.884 22.8958 24.4157 22.8536 23.7915 22.8071C23.6568 22.7954 23.5426 22.788 23.1219 22.7479L22.9187 22.7213C22.6601 22.6957 22.4044 22.6467 22.1547 22.5749C21.8522 22.485 21.5933 22.287 21.4274 22.0185C21.4043 21.9818 21.381 21.9451 21.36 21.9074C21.2816 21.7652 21.23 21.6098 21.2078 21.449L20.9512 19.4435C21.7801 18.7749 22.4254 17.9066 22.8265 16.92C23.0975 16.1844 23.2983 15.4246 23.426 14.6511C23.4385 14.5871 23.4526 14.5244 23.4648 14.4604C23.585 14.4816 23.7068 14.4928 23.829 14.4938C24.4037 14.4965 24.958 14.2814 25.3804 13.8917C25.8028 13.502 26.0619 12.9667 26.1053 12.3936C26.1488 11.8205 25.9735 11.2523 25.6148 10.8033C25.256 10.3543 24.7404 10.058 24.1719 9.97395C24.5865 9.34404 24.8198 8.61218 24.8463 7.85852L25.9755 6.19809C26.2051 5.85793 26.3346 5.46009 26.3492 5.04991C26.3637 4.63974 26.2628 4.23372 26.0578 3.87813L25.2113 2.42038C24.7828 1.68512 24.1694 1.07484 23.4319 0.650213C22.6945 0.225589 21.8587 0.00141971 21.0078 0L12.9923 0C12.1413 0.0014192 11.3056 0.225559 10.5681 0.650133C9.83068 1.07471 9.21722 1.68492 8.78874 2.42011L7.94219 3.87945C7.7376 4.23495 7.6369 4.64074 7.65156 5.05064C7.66621 5.46055 7.79562 5.85811 8.02506 6.19809L9.15424 7.85852C9.18073 8.60842 9.41194 9.33677 9.82281 9.96466C9.24917 10.0369 8.72462 10.325 8.35595 10.7704C7.98729 11.2158 7.80223 11.7849 7.83845 12.3619C7.87467 12.939 8.12946 13.4805 8.55093 13.8763C8.9724 14.2721 9.52886 14.4923 10.107 14.4922C10.2508 14.4913 10.3942 14.4766 10.5352 14.4481C10.5488 14.5156 10.5631 14.581 10.5764 14.6495C10.7042 15.4237 10.905 16.184 11.1762 16.9203C11.577 17.9069 12.2221 18.7752 13.051 19.4437L12.7954 21.4447C12.7644 21.6468 12.6879 21.8393 12.5718 22.0076C12.3825 22.2826 12.1097 22.4893 11.7938 22.5972C11.5742 22.6735 11.3437 22.7135 11.1114 22.7157C10.8723 22.7375 10.6014 22.7688 10.1442 22.801C9.96253 22.8141 9.78084 22.8263 9.59916 22.8376C8.56082 22.8707 7.52849 23.0086 6.51791 23.2494C5.39313 23.5586 4.37442 24.1698 3.57213 25.0166C2.81357 25.8146 2.26995 26.792 1.99219 27.8574C1.85989 28.3745 1.79296 28.9061 1.79297 29.4398V33.5352C1.79293 33.5962 1.80493 33.6567 1.82828 33.7131C1.85163 33.7695 1.88587 33.8208 1.92904 33.8639C1.97221 33.9071 2.02347 33.9413 2.07988 33.9647C2.1363 33.988 2.19676 34 2.25781 34H31.7422C31.8032 34 31.8637 33.988 31.9201 33.9647C31.9765 33.9413 32.0278 33.9071 32.071 33.8639C32.1141 33.8208 32.1484 33.7695 32.1717 33.7131C32.1951 33.6567 32.2071 33.5962 32.207 33.5352V29.4398C32.207 29.3925 32.2023 29.3463 32.2012 29.2984ZM30.6088 26.8225C30.9462 27.449 31.1607 28.1342 31.2407 28.8413H29.418C29.3299 28.8413 29.2455 28.8063 29.1832 28.744C29.1209 28.6818 29.0859 28.5973 29.0859 28.5093C29.0855 28.1748 28.9525 27.8541 28.7159 27.6176C28.4794 27.381 28.1587 27.248 27.8242 27.2475H27.1766C27.0886 27.2475 27.0042 27.2125 26.9419 27.1502C26.8797 27.088 26.8447 27.0036 26.8446 26.9155V26.8823C26.8447 26.7943 26.8798 26.7099 26.942 26.6477C27.0042 26.5854 27.0886 26.5504 27.1766 26.5503H30.4486C30.5041 26.6406 30.5586 26.7306 30.6088 26.8233V26.8225ZM22.946 23.6616L20.2775 27.7676L17.8747 26.6669L22.1037 23.5259C22.3328 23.5775 22.5645 23.6167 22.7978 23.6433L22.946 23.6616ZM12.8071 23.0924C12.9293 22.999 13.0422 22.8941 13.1445 22.7792L13.54 22.8589C14.0181 22.9566 14.4981 23.0292 14.9786 23.0863C15.6494 23.1675 16.3243 23.2091 17 23.2108C17.695 23.2087 18.3892 23.1644 19.0788 23.078C19.5402 23.0217 20.0008 22.9521 20.46 22.8581L20.8385 22.7811C20.9302 22.8905 21.0324 22.9907 21.1438 23.0802L19.3521 24.4109L16.9665 26.1827L15.5462 25.1281L12.8071 23.0924ZM22.9341 10.0162C22.3367 10.5887 21.5422 10.9099 20.7148 10.9132H13.2852C12.8293 10.9113 12.3789 10.8128 11.9639 10.6241C11.5488 10.4355 11.1784 10.161 10.8771 9.81883C10.4665 9.35484 10.1996 8.78145 10.1092 8.1685H23.8908C23.8004 8.78145 23.5335 9.35484 23.1229 9.81883C23.0626 9.88762 22.9994 9.95323 22.9341 10.0162ZM25.1706 12.2188C25.1702 12.5751 25.0285 12.9167 24.7765 13.1687C24.5245 13.4206 24.1829 13.5624 23.8266 13.5628C23.7688 13.5628 23.7111 13.5588 23.6539 13.5509C23.8375 12.6185 24.072 11.9664 24.1103 10.905C24.4104 10.9701 24.6792 11.1359 24.872 11.3749C25.0649 11.6139 25.1703 11.9116 25.1706 12.2188ZM8.74597 4.34616L9.59278 2.88681C9.9393 2.2921 10.4355 1.79846 11.032 1.45501C11.6285 1.11157 12.3045 0.930268 12.9928 0.929156H21.0078C21.6961 0.930269 22.3721 1.11159 22.9686 1.45509C23.5651 1.79859 24.0613 2.29229 24.4078 2.88708L25.2546 4.34589C25.3716 4.54957 25.4292 4.78199 25.4208 5.01676C25.4124 5.25152 25.3383 5.47923 25.207 5.67402L24.1445 7.23748H9.85655L8.79405 5.67402C8.6627 5.47931 8.58856 5.25168 8.58006 5.01696C8.57157 4.78225 8.62904 4.54985 8.74597 4.34616ZM10.107 13.5633C9.76949 13.5634 9.4443 13.4364 9.19609 13.2076C8.94788 12.9789 8.79483 12.6651 8.76735 12.3287C8.73988 11.9923 8.83999 11.6578 9.04779 11.3918C9.2556 11.1258 9.55588 10.9478 9.88895 10.893C9.8608 11.446 10.1912 12.8626 10.3437 13.5418C10.2656 13.5559 10.1864 13.5629 10.107 13.5625V13.5633ZM12.0376 16.5707C11.7173 15.7436 11.5688 14.8487 11.3414 13.7498L11.1273 12.7718C10.9639 11.9035 10.9289 12.1693 10.8245 11.0303C11.5363 11.5583 12.399 11.8434 13.2852 11.8437H16.3413L16.1651 13.1378C16.1457 13.2675 16.1544 13.3998 16.1908 13.5258C16.2272 13.6517 16.2903 13.7684 16.3758 13.8677C16.4614 13.9671 16.5674 14.0468 16.6866 14.1014C16.8057 14.1561 16.9353 14.1844 17.0664 14.1844H17.5862C17.7095 14.1844 17.8278 14.1354 17.9149 14.0482C18.0021 13.9611 18.0511 13.8428 18.0511 13.7195C18.0511 13.5962 18.0021 13.478 17.9149 13.3908C17.8278 13.3037 17.7095 13.2547 17.5862 13.2547L17.0855 13.2688L17.2794 11.8424H20.7148C21.5993 11.8334 22.4592 11.5493 23.175 11.0295C23.2512 11.0643 22.7234 13.5033 22.6586 13.7487C22.6586 13.7487 22.6586 13.7509 22.653 13.7753C22.5075 14.4519 22.2966 15.7223 21.9624 16.5678C21.5975 17.4671 20.9947 18.2501 20.2186 18.8328C19.284 19.5173 18.1583 19.8914 17 19.9025C15.8421 19.8859 14.7176 19.5117 13.7806 18.8312C13.0052 18.2495 12.4027 17.4679 12.0376 16.57V16.5707ZM15.3494 20.6106C15.8876 20.7561 16.4425 20.8307 17 20.8327C18.0792 20.8215 19.1392 20.5452 20.0866 20.0281L20.2829 21.5653C20.2987 21.6898 20.3253 21.8126 20.3625 21.9324L20.273 21.9507C18.1131 22.3948 15.8853 22.3948 13.7254 21.9507L13.6321 21.9316C13.6707 21.8124 13.6989 21.6901 13.7163 21.5661L13.9126 20.0281C14.3655 20.2812 14.8482 20.4769 15.3494 20.6106ZM11.1501 23.6449C11.3895 23.6397 11.6274 23.6072 11.8594 23.5482L13.0188 24.4093L16.0584 26.6672L13.6558 27.7676L10.9897 23.6621L11.1501 23.6449ZM3.14048 27.353C3.37342 26.7954 3.6942 26.2786 4.09063 25.8225H4.86359C4.89109 25.8225 4.91747 25.8334 4.93694 25.8528C4.95641 25.8722 4.96738 25.8986 4.96745 25.9261C4.96801 26.2 5.07708 26.4626 5.27078 26.6564C5.46447 26.8501 5.72703 26.9592 6.001 26.9599H8.08217C8.0958 26.9599 8.10929 26.9626 8.12188 26.9678C8.13446 26.973 8.1459 26.9807 8.15552 26.9903C8.16514 27 8.17277 27.0114 8.17796 27.024C8.18315 27.0366 8.1858 27.0501 8.18577 27.0637V27.3873C8.1858 27.4009 8.18315 27.4144 8.17796 27.427C8.17278 27.4396 8.16515 27.4511 8.15553 27.4608C8.14592 27.4705 8.13449 27.4781 8.1219 27.4834C8.10931 27.4886 8.09581 27.4914 8.08217 27.4914H3.08656C3.10436 27.4452 3.12163 27.3987 3.14048 27.353ZM2.72266 29.4398C2.72373 29.0981 2.75699 28.7573 2.822 28.4219H8.08138C8.3553 28.4212 8.61779 28.312 8.81143 28.1183C9.00507 27.9245 9.1141 27.662 9.11466 27.3881V27.0645C9.11396 26.7909 9.00502 26.5286 8.81162 26.335C8.61822 26.1414 8.35608 26.0322 8.08244 26.0312H6.00127C5.98739 26.0313 5.97364 26.0286 5.96084 26.0232C5.94804 26.0179 5.93643 26.01 5.9267 26.0001C5.91698 25.9902 5.90933 25.9785 5.90421 25.9656C5.89909 25.9527 5.89659 25.9389 5.89688 25.925C5.89636 25.6924 5.81742 25.4668 5.67281 25.2847C5.52821 25.1025 5.32639 24.9745 5.1 24.9212C5.60673 24.5706 6.16911 24.3083 6.76334 24.1453C7.71313 23.921 8.68318 23.7934 9.65866 23.7644L9.93597 23.7458L13.0953 28.6105C13.1579 28.7022 13.2504 28.7692 13.3571 28.8002C13.4637 28.8311 13.5778 28.8239 13.6797 28.7799L16.5033 27.4863V33.0703H14.025C14.0303 33.0359 14.0338 33.0012 14.0356 32.9665V32.6429C14.035 32.3692 13.926 32.1068 13.7326 31.9132C13.5391 31.7195 13.2769 31.6103 13.0031 31.6094H10.9222C10.8947 31.6094 10.8682 31.5984 10.8487 31.579C10.8292 31.5595 10.8182 31.5331 10.8181 31.5055C10.8175 31.2316 10.7084 30.9692 10.5148 30.7755C10.3212 30.5818 10.0587 30.4727 9.78483 30.472H7.50391V29.6507C7.50391 29.5274 7.45493 29.4091 7.36776 29.322C7.28058 29.2348 7.16235 29.1858 7.03906 29.1858C6.91578 29.1858 6.79754 29.2348 6.71037 29.322C6.62319 29.4091 6.57422 29.5274 6.57422 29.6507V33.0703H2.72266V29.4398ZM7.50391 33.0703V31.4014H9.78483C9.81233 31.4015 9.83868 31.4124 9.8581 31.4319C9.87752 31.4514 9.88842 31.4778 9.88842 31.5053C9.88905 31.7792 9.99819 32.0418 10.1919 32.2355C10.3857 32.4292 10.6483 32.5382 10.9222 32.5388H13.0031C13.0307 32.5389 13.0571 32.5499 13.0766 32.5694C13.0961 32.5889 13.107 32.6154 13.107 32.6429V32.9665C13.107 32.994 13.0961 33.0204 13.0766 33.0399C13.0571 33.0594 13.0307 33.0703 13.0031 33.0703H7.50391ZM20.7363 33.0703V32.2402C20.7364 32.1478 20.7732 32.0592 20.8386 31.9939C20.904 31.9285 20.9926 31.8918 21.085 31.8917H21.1172C21.4561 31.8912 21.7809 31.7564 22.0206 31.5167C22.2602 31.2771 22.395 30.9522 22.3954 30.6133C22.3955 30.5209 22.4323 30.4323 22.4977 30.3669C22.5631 30.3016 22.6517 30.2649 22.7441 30.2648H22.7773C22.8698 30.2649 22.9584 30.3016 23.0237 30.3669C23.089 30.4323 23.1258 30.5209 23.1258 30.6133V33.0703H20.7363ZM27.4258 33.0703V29.6504C27.4258 29.5271 27.3768 29.4089 27.2896 29.3217C27.2025 29.2345 27.0842 29.1855 26.9609 29.1855C26.8377 29.1855 26.7194 29.2345 26.6322 29.3217C26.5451 29.4089 26.4961 29.5271 26.4961 29.6504V33.0703H24.0555V30.6133C24.0551 30.2744 23.9203 29.9495 23.6807 29.7099C23.4411 29.4703 23.1162 29.3355 22.7773 29.3351H22.7441C22.4053 29.3355 22.0804 29.4703 21.8407 29.7099C21.601 29.9495 21.4662 30.2744 21.4657 30.6133C21.4656 30.7057 21.4289 30.7943 21.3636 30.8597C21.2982 30.9251 21.2096 30.9619 21.1172 30.962H21.085C20.7462 30.9625 20.4213 31.0973 20.1816 31.3369C19.9419 31.5765 19.8071 31.9013 19.8066 32.2402V33.0703H17.4314V27.4863L20.2552 28.7799C20.3568 28.8259 20.4715 28.8341 20.5786 28.8031C20.6857 28.7721 20.7783 28.7039 20.8396 28.6107L23.9942 23.7562H24.0162C24.2553 23.7748 24.4914 23.7928 24.7254 23.8133C24.8662 23.8258 25.0073 23.8369 25.1488 23.8483C25.8525 23.8821 26.5514 23.9813 27.2367 24.1448C28.1821 24.4046 29.0401 24.9141 29.7208 25.6198H27.1766C26.8421 25.6202 26.5215 25.7533 26.2849 25.9898C26.0484 26.2263 25.9153 26.547 25.9149 26.8815V26.9147C25.9153 27.2492 26.0484 27.5699 26.2849 27.8064C26.5215 28.0429 26.8421 28.176 27.1766 28.1764H27.8242C27.9122 28.1766 27.9966 28.2116 28.0588 28.2738C28.1211 28.3361 28.1561 28.4205 28.1563 28.5085C28.1567 28.843 28.2897 29.1636 28.5263 29.4002C28.7628 29.6367 29.0835 29.7698 29.418 29.7702H31.2773V33.0703H27.4258Z"
                        fill="black"
                      />
                      <path
                        d="M16.9669 16.8672C17.3653 16.8823 17.7622 16.8107 18.1303 16.6574C18.4983 16.5041 18.8287 16.2727 19.0985 15.9792C19.1373 15.9321 19.1665 15.8778 19.1843 15.8195C19.2021 15.7611 19.2082 15.6998 19.2024 15.6391C19.1965 15.5784 19.1787 15.5194 19.1501 15.4656C19.1214 15.4117 19.0824 15.364 19.0353 15.3252C18.9882 15.2864 18.934 15.2573 18.8756 15.2395C18.8173 15.2217 18.756 15.2155 18.6952 15.2214C18.6345 15.2273 18.5755 15.245 18.5217 15.2737C18.4678 15.3024 18.4201 15.3414 18.3813 15.3884C18.1976 15.5744 17.9766 15.7195 17.7328 15.8141C17.489 15.9087 17.228 15.9508 16.9669 15.9375C16.7057 15.9507 16.4446 15.9085 16.2008 15.8138C15.957 15.719 15.7359 15.5738 15.5522 15.3877C15.5134 15.3406 15.4657 15.3016 15.4118 15.2729C15.358 15.2442 15.299 15.2265 15.2383 15.2206C15.1776 15.2147 15.1163 15.2209 15.0579 15.2387C14.9996 15.2565 14.9453 15.2856 14.8982 15.3244C14.8511 15.3632 14.8121 15.4109 14.7835 15.4648C14.7548 15.5186 14.737 15.5776 14.7312 15.6383C14.7253 15.699 14.7314 15.7603 14.7493 15.8187C14.7671 15.877 14.7962 15.9313 14.835 15.9784C15.1049 16.272 15.4352 16.5035 15.8033 16.657C16.1714 16.8104 16.5684 16.8821 16.9669 16.8672Z"
                        fill="black"
                      />
                      <path
                        d="M15.2735 4.69015L16.7262 5.75265C16.8059 5.81097 16.9021 5.8424 17.0009 5.8424C17.0996 5.8424 17.1958 5.81097 17.2755 5.75265L18.7282 4.69015C18.7872 4.64696 18.8351 4.5905 18.8681 4.52534C18.9012 4.46017 18.9184 4.38815 18.9184 4.31508V2.22435C18.9184 2.10107 18.8694 1.98283 18.7823 1.89566C18.6951 1.80848 18.5768 1.75951 18.4536 1.75951H15.5474C15.4863 1.75947 15.4258 1.77147 15.3694 1.79482C15.313 1.81817 15.2618 1.85241 15.2186 1.89558C15.1754 1.93875 15.1412 1.99001 15.1178 2.04642C15.0945 2.10283 15.0825 2.1633 15.0825 2.22435V4.31508C15.0826 4.38821 15.1 4.46029 15.1332 4.52545C15.1663 4.59062 15.2144 4.64705 15.2735 4.69015ZM16.013 2.68919H17.9887V4.07921L17.0001 4.80251L16.0122 4.07921L16.013 2.68919Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_1008">
                        <rect width="34" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </foreignObject>
            </svg>
            <div className="card-content">
              <h2>Parlimentary</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
            >
              <circle
                cx="37"
                cy="37"
                r="37"
                fill="#E66767"
                fill-opacity="0.49"
              />

              <foreignObject x="15" y="15" width="44" height="44">
                <div className="profile-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16.0014 7.09511C11.2927 7.09511 7.46191 10.9259 7.46191 15.6346C7.46191 20.3433 11.2927 24.1741 16.0014 24.1741C20.7101 24.1741 24.5409 20.3433 24.5409 15.6346C24.5409 10.9259 20.7101 7.09511 16.0014 7.09511ZM16.0014 23.2217C11.8178 23.2217 8.41429 19.8181 8.41429 15.6346C8.41429 11.451 11.8178 8.04748 16.0014 8.04748C20.1849 8.04748 23.5885 11.451 23.5885 15.6346C23.5885 19.8181 20.1849 23.2217 16.0014 23.2217Z"
                      fill="black"
                    />
                    <path
                      d="M21.728 13.5972C21.64 13.3265 21.3897 13.1447 21.105 13.1447H17.6821L16.6244 9.88936C16.5364 9.61867 16.2861 9.4368 16.0015 9.4368C16.0015 9.4368 16.0015 9.4368 16.0015 9.4368C15.7169 9.4368 15.4666 9.61867 15.3786 9.88936L14.3208 13.1448H10.8979C10.6133 13.1448 10.3629 13.3267 10.2749 13.5974C10.1871 13.8679 10.2827 14.1622 10.5129 14.3295L13.2821 16.3415L12.2244 19.5969C12.1364 19.8677 12.2321 20.1619 12.4624 20.3292C12.5775 20.4128 12.7124 20.4546 12.8473 20.4546C12.9822 20.4546 13.1171 20.4128 13.2322 20.3291L16.0015 18.3172L18.7707 20.3291C19.0009 20.4964 19.3104 20.4964 19.5406 20.3292C19.7709 20.1618 19.8665 19.8676 19.7786 19.5968L18.7209 16.3415L21.4901 14.3295C21.7203 14.1622 21.8159 13.8679 21.728 13.5972ZM17.9862 15.6979C17.756 15.8652 17.6603 16.1595 17.7483 16.4302L18.5899 19.0205L16.3864 17.4196C16.1561 17.2523 15.8467 17.2523 15.6165 17.4196L13.413 19.0205L14.2547 16.4302C14.3426 16.1594 14.2469 15.8652 14.0167 15.6979L11.8132 14.097H14.5369V14.097C14.8216 14.097 15.0719 13.9152 15.1598 13.6445L16.0015 11.0541L16.8432 13.6445C16.9311 13.9152 17.1814 14.097 17.466 14.097H20.1897L17.9862 15.6979Z"
                      fill="black"
                    />
                    <path
                      d="M28.3959 13.7921C28.2943 13.5495 28.0153 13.4353 27.7728 13.537C27.5302 13.6386 27.416 13.9177 27.5176 14.1602C28.6362 16.829 30.1681 20.4842 28.7668 23.4248C27.7637 25.5296 25.4293 27.0929 21.6302 28.2041L21.5523 28.2268C19.2237 28.9077 17.188 29.5029 16.0015 30.8389C14.8149 29.5029 12.7792 28.9077 10.4507 28.2268L10.3728 28.204C6.57423 27.0931 4.23992 25.5301 3.23661 23.4256C1.94311 20.7125 3.07592 17.5263 4.4573 14.227C4.55886 13.9844 4.44455 13.7054 4.20198 13.6039C3.95942 13.5022 3.68036 13.6166 3.57886 13.8592C2.40311 16.6673 0.79299 20.513 2.37699 23.8355C3.50367 26.1987 6.03167 27.9266 10.1055 29.118L10.1835 29.1409C12.5376 29.8292 14.5707 30.4237 15.5062 31.7438C15.6199 31.9042 15.8051 32 16.0016 32C16.198 32 16.3832 31.9042 16.4968 31.7437C17.4323 30.4236 19.4654 29.8292 21.8196 29.1408L21.8975 29.118C25.9719 27.9264 28.5001 26.1981 29.6265 23.8344C31.2111 20.5091 29.584 16.6268 28.3959 13.7921Z"
                      fill="black"
                    />
                    <path
                      d="M29.2297 3.91637L26.1922 0.501065C25.6922 -0.0611842 24.8484 -0.163809 24.2294 0.26219C23.2422 0.941752 20.5301 2.30162 16.6776 0.258815C16.2543 0.0342532 15.7486 0.0343157 15.3252 0.258815C11.4727 2.30156 8.76059 0.941627 7.7734 0.26219C7.1544 -0.163809 6.31065 -0.0611217 5.81065 0.501002L2.77316 3.91631C2.46016 4.26818 2.33366 4.73468 2.42604 5.19618C2.51879 5.65918 2.81628 6.04237 3.24235 6.24755C4.78078 6.98849 5.21178 9.03374 4.93141 10.2253C4.82766 10.6662 4.66341 11.1737 4.41453 11.8225C4.32034 12.068 4.44303 12.3435 4.68859 12.4377C4.74472 12.4592 4.80228 12.4694 4.85903 12.4694C5.05047 12.4694 5.23103 12.353 5.30372 12.1636C5.56834 11.4737 5.74459 10.9271 5.85847 10.4434C6.18215 9.06767 5.81747 7.94549 5.45453 7.24637C5.02528 6.41943 4.35272 5.72531 3.65553 5.38949C3.50116 5.31518 3.39341 5.17656 3.35991 5.00931C3.32672 4.84349 3.37222 4.67587 3.48478 4.54931L6.52228 1.134C6.70365 0.930064 7.00934 0.892502 7.23346 1.04675C8.71765 2.06831 10.4314 2.46194 12.3271 2.21669C13.868 2.01731 15.1464 1.43163 15.7714 1.10025C15.9154 1.02381 16.0874 1.02381 16.2314 1.10025C16.8564 1.43163 18.1349 2.01731 19.6758 2.21669C21.5712 2.46187 23.2851 2.06837 24.7694 1.04675C24.9934 0.892502 25.2991 0.930001 25.4805 1.134L28.518 4.54931C28.6305 4.67587 28.6761 4.84356 28.6429 5.00937C28.6095 5.17662 28.5017 5.31518 28.3473 5.38949C27.6501 5.72524 26.9776 6.41943 26.5484 7.24637C26.1854 7.94549 25.8207 9.06767 26.1444 10.4434C26.2547 10.9121 26.4226 11.4367 26.6727 12.0945C26.7662 12.3402 27.0412 12.4638 27.2871 12.3703C27.5329 12.2768 27.6564 12.0017 27.5629 11.7559C27.3281 11.1384 27.1719 10.652 27.0716 10.2253C26.7912 9.03374 27.2222 6.98849 28.7606 6.24755C29.1867 6.04237 29.4842 5.65918 29.5769 5.19624C29.6692 4.73474 29.5427 4.26831 29.2297 3.91637Z"
                      fill="black"
                    />
                    <path
                      d="M26.6836 14.2301C26.1358 12.9257 25.6185 11.6937 25.357 10.5822C25.1187 9.56953 25.1672 8.50672 25.4972 7.50872C25.7994 6.59466 26.3159 5.7746 26.9907 5.13723C27.3271 4.81954 27.3494 4.29967 27.0416 3.9536L25.6045 2.33755C25.3454 2.0463 24.9223 1.96848 24.5757 2.14836C23.4264 2.74448 22.1609 3.04679 20.8143 3.04686C20.8141 3.04686 20.814 3.04686 20.8137 3.04686C18.9871 3.04686 17.3817 2.48511 16.3566 2.0138C16.1309 1.90992 15.8718 1.90998 15.646 2.0138C14.621 2.48511 13.0156 3.04686 11.1883 3.04686C9.84187 3.04692 8.57631 2.74461 7.42688 2.14842C7.08025 1.96855 6.65713 2.0463 6.39813 2.33761L4.96082 3.95354C4.65307 4.2996 4.67545 4.81948 5.01176 5.1371C5.68657 5.77454 6.20307 6.59454 6.50532 7.5086C6.83532 8.50666 6.88382 9.56941 6.64557 10.5821C6.38413 11.6933 5.86682 12.9253 5.31894 14.2301C4.07945 17.182 2.67451 20.5276 3.91189 23.1264C4.79176 24.9745 7.02732 26.4348 10.5564 27.4669L10.6358 27.4902C12.466 28.0253 14.1947 28.5308 15.535 29.4127C15.6766 29.5059 15.8389 29.5525 16.0013 29.5525C16.1637 29.5525 16.326 29.5059 16.4676 29.4127C17.8079 28.5308 19.5367 28.0253 21.3671 27.4901L21.4461 27.4669C24.9751 26.4348 27.2107 24.9744 28.0907 23.1264C29.328 20.5276 27.9231 17.182 26.6836 14.2301ZM27.2308 22.7169C26.4724 24.3096 24.4362 25.6001 21.1787 26.5528L21.0997 26.5759C19.2237 27.1245 17.4504 27.643 16.0012 28.5797C14.5521 27.643 12.7789 27.1246 10.9029 26.576L10.8237 26.5528C7.56613 25.6001 5.52994 24.3096 4.77163 22.717C3.71757 20.5032 5.03476 17.3663 6.19713 14.5984C6.76069 13.2563 7.29294 11.9887 7.57257 10.8003C8.2075 8.10178 7.05375 5.7991 5.73726 4.51354L7.05738 3.02929C8.32513 3.67298 9.71444 3.99929 11.1882 3.99923C13.1623 3.99923 14.8881 3.40542 16.0012 2.89854C17.1145 3.40542 18.8399 3.99929 20.8137 3.99923C20.8138 3.99923 20.8142 3.99923 20.8143 3.99923C22.2882 3.99917 23.6775 3.67286 24.945 3.02929L26.2652 4.51354C24.9487 5.79904 23.7948 8.10172 24.4298 10.8003C24.7096 11.9891 25.2419 13.2567 25.8055 14.5988C26.9676 17.3664 28.2848 20.5032 27.2308 22.7169Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </foreignObject>
            </svg>
            <div className="card-content">
              <h2>Police</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Content;
