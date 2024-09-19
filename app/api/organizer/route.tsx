import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";

import { prefix } from "@/constants";
import { translation } from "@/i18n";
import fetch from "node-fetch";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const lng = searchParams.get("lng");
    const team = searchParams.get("team");
    const { t } = await translation(lng ?? "en", "organizer");

    const fontData = await fetch(
      "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff",
    ).then((res: any) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: "San Francisco",
            display: "flex",
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
              flex: 1,
              height: "100%",
              fontSize: 32,
              color: "#223B3A",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                style={{
                  maxWidth: '50%',
                  height: 630,
                  objectFit: "cover",
                  objectPosition: "top",
                  marginRight: 20,
                }}
                src={
                  process.env.NODE_ENV === "development"
                    ? `http://localhost:3000/assets/2024/images/organizer/og/${t(`${team}.member${id}.img`).replace(".webp", ".jpg")}`
                    : `${prefix}/assets/2024/images/organizer/og/${t(`${team}.member${id}.img`).replace(".webp", ".jpg")}`
                }
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 40,
                }}
              >
                <p style={{
                  fontSize: 18,
                  margin: 0,
                }}>
                  KWDC24 Orgainzer
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{
                      fontWeight: "400",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {t(`${team}.member${id}.name`)}
                  </h2>
                  {t(`${team}.member${id}.nickname`) && (
                    <h3
                      style={{
                        fontWeight: "400",
                        margin: 0,
                        marginLeft: 10,
                      }}
                    >
                      [{t(`${team}.member${id}.nickname`)}]
                    </h3>
                  )}
                </div>
                <h6
                  style={{
                    marginTop: 20,
                    marginBottom: 28,
                    maxWidth: 500,
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {t(`${team}.member${id}.short_introduction`)}
                </h6>
                {t(`${team}.member${id}.sns`) && (
                  <h6
                    style={{
                      fontWeight: "400",
                      margin: 0,
                    }}
                  >
                    {t(`${team}.member${id}.sns`)}
                  </h6>
                )}
              </div>
            </div>

            <img
              style={{
                width: 200,
                position: "absolute",
                right: 50,
                bottom: 50,
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
            name: "San Francisco",
            data: fontData,
            style: "normal",
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
