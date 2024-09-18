import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import fetch from 'node-fetch';
import React from "react";

import { prefix } from "@/constants";
import { translation } from "@/i18n";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const lng = searchParams.get("lng");
    const {t} = await translation(lng ?? 'en', 'speaker')

    const fontData = await fetch(
      'https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff'
    ).then((res: any) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: 'San Francisco',
            display: "flex",
            padding: "30px 40px",
            backgroundImage: "linear-gradient(180deg, #E8EEF0 80%, #FFFFFF 100%)",
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              height: "100%",
              fontSize: 32,
              color: "#223B3A",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {t(`speaker${id}.title`)}
                </h2>
                <h5
                  style={{
                    marginBottom: 28,
                  }}
                >
                  {t(`speaker${id}.description`)}
                </h5>
              </div>
            </div>
            {id === '10' ? (
              <div
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: 150,
                      height: 150,
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: 9999,
                      marginRight: 20,
                    }}
                    src={
                      process.env.NODE_ENV === "development"
                        ? `http://localhost:3000/assets/2024/images/speaker/og/${t(`speaker10.img`).replace(".webp", ".jpg")}`
                        : `${prefix}/assets/2024/images/speaker/${t(`speaker10.img`)}`
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <h5
                        style={{
                          fontWeight: "400",
                          margin: 0,
                        }}
                      >
                        {t(`speaker10.name`)}
                      </h5>
                      {t(`speaker10.nickname`) && (
                        <h5
                          style={{
                            fontWeight: "400",
                            margin: 0,
                            marginLeft: 10,
                          }}
                        >
                          [{t(`speaker10.nickname`)}]
                        </h5>
                      )}
                    </div>
                    {t(`speaker10.affiliation`) && (
                      <h6
                        style={{
                          fontWeight: "400",
                          margin: 0,
                        }}
                      >
                        {t(`speaker10.affiliation`)}
                      </h6>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: 150,
                      height: 150,
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: 9999,
                      marginRight: 20,
                    }}
                    src={
                      process.env.NODE_ENV === "development"
                        ? `http://localhost:3000/assets/2024/images/speaker/og/${t(`speaker10.nest.img`).replace(".webp", ".jpg")}`
                        : `${prefix}/assets/2024/images/speaker/${t(`speaker10.nest.img`)}`
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <h5
                        style={{
                          fontWeight: "400",
                          margin: 0,
                        }}
                      >
                        {t(`speaker10.nest.name`)}
                      </h5>
                      {t(`speaker10.nest.nickname`) && (
                        <h5
                          style={{
                            fontWeight: "400",
                            margin: 0,
                            marginLeft: 10,
                          }}
                        >
                          [{t(`speaker10.nest.nickname`)}]
                        </h5>
                      )}
                    </div>
                    {t(`speaker10.nest.affiliation`) && (
                      <h6
                        style={{
                          fontWeight: "400",
                          margin: 0,
                        }}
                      >
                        {t(`speaker10.nest.affiliation`)}
                      </h6>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: 150,
                    height: 150,
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: 9999,
                    marginRight: 20,
                  }}
                  src={
                    process.env.NODE_ENV === "development"
                      ? `http://localhost:3000/assets/2024/images/speaker/og/${t(`speaker${id}.img`).replace(".webp", ".jpg")}`
                      : `${prefix}/assets/2024/images/speaker/${t(`speaker${id}.img`)}`
                  }
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <h5
                      style={{
                        fontWeight: "400",
                        margin: 0,
                      }}
                    >
                      {t(`speaker${id}.name`)}
                    </h5>
                    {t(`speaker${id}.nickname`) && (
                      <h5
                        style={{
                          fontWeight: "400",
                          margin: 0,
                          marginLeft: 10,
                        }}
                      >
                        [{t(`speaker${id}.nickname`)}]
                      </h5>
                    )}
                  </div>
                  {t(`speaker${id}.affiliation`) && (
                    <h6
                      style={{
                        fontWeight: "400",
                        margin: 0,
                      }}
                    >
                      {t(`speaker${id}.affiliation`)}
                    </h6>
                  )}
                </div>
              </div>
            )}

            <img
              style={{
                width: 200,
                position: "absolute",
                right: 10,
                bottom: 20,
              }}
              src={
                process.env.NODE_ENV === "development"
                  ? `http://localhost:3000/assets/2024/images/logo.png`
                  : `${prefix}/assets/2024/images/logo.png`
              }
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'San Francisco',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
