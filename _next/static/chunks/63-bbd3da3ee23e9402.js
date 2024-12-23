(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63],
  {
    3063: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ToastToBSCSCAN: function () {
            return b;
          },
          default: function () {
            return M;
          },
        });
      var s = n(5893),
        i = n(7294),
        a = n(2920),
        r = n(5504),
        l = n.n(r);
      n(7134);
      var o = n(2136),
        d = n(5675),
        c = n.n(d),
        m = n(8680),
        u = n(3564),
        _ = n(4553),
        v = n(1222),
        h = n(8790),
        f = n(9274),
        p = n(5214),
        y = n(2593),
        N = n(5553),
        x = n(1686);
      let g = (e) =>
        (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 336.41 337.42",
          ...e,
          children: [
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("style", {
                children: ".cls-1{fill:#fff;stroke:#f0b90b}",
              }),
            }),
            (0, s.jsx)("title", { children: "Asset 1" }),
            (0, s.jsx)("g", {
              id: "Layer_2",
              "data-name": "Layer 2",
              children: (0, s.jsx)("g", {
                id: "Layer_1-2",
                "data-name": "Layer 1",
                children: (0, s.jsx)("path", {
                  d: "m168.2.71 41.5 42.5-104.5 104.5-41.5-41.5ZM231.2 63.71l41.5 42.5-167.5 167.5-41.5-41.5ZM42.2 126.71l41.5 42.5-41.5 41.5-41.5-41.5ZM294.2 126.71l41.5 42.5-167.5 167.5-41.5-41.5Z",
                  className: "cls-1",
                }),
              }),
            }),
          ],
        });
      var C = n(5694),
        j = n(5415),
        w = n.n(j),
        T = n(6298),
        I = n.n(T);
      let F = (e) => {
          let { account: t } = (0, o.O)(),
            [n, a] = (0, i.useState)(e.Data),
            [r, l] = (0, i.useState)([
              y.O$.from(0),
              y.O$.from(0),
              y.O$.from(0),
              y.O$.from(0),
            ]);
          return (
            (0, i.useEffect)(() => {
              let e = async () => {
                try {
                  if (!t || !(null == t ? void 0 : t.signer)) return;
                  let e = m.ZJ[null == t ? void 0 : t.network.id];
                  if (!e) return;
                  let s = h.M1.connect(e, null == t ? void 0 : t.signer),
                    i = await s.poolsList(n.Id),
                    a = i.totalRaised.div(i.price),
                    l = i.totalReturnAmount.sub(i.currentReturnBalance),
                    o = l.div(i.totalRaised.div(y.O$.from(10)));
                  console.log(o.toString()),
                    (r[0] = i.price),
                    (r[1] = a),
                    (r[2] = i.totalRaised),
                    (r[3] = o);
                } catch (e) {
                  console.error(e);
                }
              };
              e();
            }, [null == t ? void 0 : t.signer, null == t ? void 0 : t.address]),
            (0, s.jsxs)("div", {
              className: I().container,
              children: [
                (0, s.jsx)("div", {
                  className: I().NFTContainer,
                  children: (0, s.jsx)(c(), {
                    className: I().nftImage,
                    src: n.Image,
                    fill: !0,
                    style: { objectFit: "cover", borderRadius: "20px" },
                    alt: "INFT Image",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: I().descriptionContainer,
                  children: [
                    (0, s.jsx)("div", {
                      className: I().NFTTitle,
                      style: u.LogoFont.style,
                      children: n.Name,
                    }),
                    (0, s.jsxs)("div", {
                      className: I().detailsContainer,
                      children: [
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: "Price",
                        }),
                        (0, s.jsxs)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: [
                            N.formatEther(r[0]),
                            " ",
                            (0, s.jsx)(g, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: I().detailsContainer,
                      children: [
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: "Minted",
                        }),
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: "TBA",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: I().detailsContainer,
                      children: [
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: "Raised",
                        }),
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: " TBA ",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: I().detailsContainer,
                      children: [
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: "Returned",
                        }),
                        (0, s.jsx)("div", {
                          className: I().detailsItems,
                          style: u.secondaryFont.style,
                          children: "TBA",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        k = [
          { width: 1, itemsToShow: 1, showArrows: 0 },
          { width: 550, itemsToShow: 1, itemsToScroll: 2, showArrows: 0 },
          { width: 868, itemsToShow: 2 },
          { width: 1200, itemsToShow: 3 },
          { width: 1440, itemsToShow: 3 },
        ],
        S = () =>
          (0, s.jsx)("div", {
            className: w().container,
            children: (0, s.jsx)("div", {
              className: w().contWrapper,
              children: (0, s.jsx)(C.Z, {
                breakPoints: k,
                enableTilt: !0,
                children: x.map((e) => (0, s.jsx)(F, { Data: e }, e.Id)),
              }),
            }),
          });
      var A = n(4951);
      let b = (e) =>
          (0, s.jsx)("a", {
            style: u.secondaryFont.style,
            onClick: () => a.Am.dismiss(),
            target: "_blank",
            rel: "noreferrer",
            className: l().transactionToast,
            href: e,
            children: " Click Here To Check Transaction ",
          }),
        B = () => {
          var e, t;
          let { account: n } = (0, o.O)(),
            [r, d] = (0, i.useState)(!1),
            [C, j] = (0, i.useState)(x[x.length - 1]),
            [w, T] = (0, i.useState)(0),
            [I, F] = (0, i.useState)(x[x.length - 1].Id),
            [k, B] = (0, i.useState)("BUSD"),
            [M, E] = (0, i.useState)(y.O$.from(0)),
            [O, L] = (0, i.useState)(!0),
            [R, Z] = (0, i.useState)(!1),
            D = () => {
              T(w + 1);
            },
            P = () => {
              0 == w ? T(0) : T(w - 1);
            };
          (0, i.useEffect)(() => {
            let e,
              t = m.ZJ[null == n ? void 0 : n.network.id];
            if (
              ("BUSD" == k && (e = m.lz[null == n ? void 0 : n.network.id]), !e)
            )
              return;
            let s = async () => {
              try {
                let s = h.w6.connect(e, null == n ? void 0 : n.signer),
                  i = await s.allowance(null == n ? void 0 : n.address, t),
                  a = M.mul(y.O$.from(w));
                i.lt(a) ? Z(!1) : i.gte(a) && Z(!0);
              } catch (e) {
                console.error(e);
              }
            };
            s();
          }, [
            null == n ? void 0 : n.address,
            null == n ? void 0 : n.signer,
            w,
            null == n ? void 0 : n.network.id,
          ]),
            (0, i.useEffect)(() => {
              try {
                if (!(null == n ? void 0 : n.signer)) return;
                let e = m.ZJ[null == n ? void 0 : n.network.id];
                if (!e) return;
                m.lz[null == n ? void 0 : n.network.id];
                let t = h.M1.connect(e, null == n ? void 0 : n.signer),
                  s = async () => {
                    let e = await t.poolsList(I);
                    L(e.open), E(e.price);
                  };
                s();
              } catch (r) {
                var e, t;
                let s =
                  null == r
                    ? void 0
                    : null === (e = r.error) || void 0 === e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.data;
                if (!s) return r;
                if (!(null == n ? void 0 : n.signer)) return;
                let i = m.vS[null == n ? void 0 : n.network.id];
                if (!i) return;
                let a = h.M1.connect(i, null == n ? void 0 : n.signer);
                console.error(a.interface.parseError(s));
              }
            }, [
              null == n ? void 0 : n.signer,
              null == n ? void 0 : n.address,
              I,
              null == n ? void 0 : n.network.id,
            ]),
            (0, i.useEffect)(() => {
              try {
                new p.Z(".glide", {
                  peek: 0,
                  perView: 1,
                  type: "carousel",
                }).mount();
              } catch (e) {
                console.error(e);
              }
            }, []);
          let H = async () => {
              let e;
              let t = a.Am.loading("Approving Token Spending");
              e = m.lz[null == n ? void 0 : n.network.id];
              let s = m.ZJ[null == n ? void 0 : n.network.id],
                i = h.w6.connect(e, null == n ? void 0 : n.signer);
              try {
                let e = await i.allowance(null == n ? void 0 : n.address, s),
                  r = M.mul(y.O$.from(w));
                e.lt(r)
                  ? (await (await i.approve(s, r)).wait(1),
                    Z(!0),
                    a.Am.update(t, {
                      render: "Token Approved, Please Proceed to Mint",
                      type: "success",
                      isLoading: !1,
                      autoClose: 3e3,
                    }))
                  : (Z(!0),
                    a.Am.update(t, {
                      render: "Token Approved, Please Proceed to Mint",
                      type: "success",
                      isLoading: !1,
                      autoClose: 3e3,
                    }));
              } catch (e) {
                var r, l;
                a.Am.update(t, {
                  render:
                    "Token Approve Failed, Please Check Details And Try Again",
                  type: "warning",
                  isLoading: !1,
                  autoClose: 3e3,
                }),
                  null == e ||
                    null === (r = e.error) ||
                    void 0 === r ||
                    null === (l = r.data) ||
                    void 0 === l ||
                    l.data;
              }
            },
            J = async () => {
              if (
                (w < 1 && a.Am.warn("amount should be greater than 0"),
                w < 1 || !(null == n ? void 0 : n.signer))
              )
                return;
              let e = m.ZJ[null == n ? void 0 : n.network.id];
              if (!e) return;
              let t = h.M1.connect(e, null == n ? void 0 : n.signer);
              d(!0);
              let s = a.Am.loading("Minting Your iNFT's");
              try {
                let e;
                "BUSD" == k && (e = m.lz[null == n ? void 0 : n.network.id]);
                let i = await (await t.participate(I, w, e)).wait(1);
                a.Am.update(s, {
                  render: "minted",
                  autoClose: 3e3,
                  closeOnClick: !0,
                  type: "info",
                  isLoading: !1,
                }),
                  a.Am.info(
                    b("https://bscscan.com/tx/".concat(i.transactionHash))
                  ),
                  d(!1);
              } catch (l) {
                var i, r;
                let e =
                  null == l
                    ? void 0
                    : null === (i = l.error) || void 0 === i
                    ? void 0
                    : null === (r = i.data) || void 0 === r
                    ? void 0
                    : r.data;
                if (!e) return l;
                let n = t.interface.parseError(e);
                console.error(n),
                  a.Am.update(s, {
                    render: n.errorFragment.name,
                    autoClose: 3e3,
                    closeOnClick: !0,
                    type: "info",
                    isLoading: !1,
                  }),
                  d(!1);
              }
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(a.Ix, {
                className: l().toast,
                position: "top-right",
                autoClose: !1,
                hideProgressBar: !1,
                newestOnTop: !1,
                closeOnClick: !1,
                rtl: !1,
                pauseOnFocusLoss: !0,
                draggable: !0,
                pauseOnHover: !0,
                theme: "light",
              }),
              n
                ? (null == n
                    ? void 0
                    : null === (e = n.network) || void 0 === e
                    ? void 0
                    : e.id) == m.a_.ETH_MAIN ||
                  (null == n
                    ? void 0
                    : null === (t = n.network) || void 0 === t
                    ? void 0
                    : t.id) == m.a_.BSC_TEST
                  ? (0, s.jsxs)("div", {
                      className: l().container,
                      children: [
                        (0, s.jsxs)("div", {
                          className: l().CountdownContainer,
                          children: [
                            (0, s.jsx)("div", {
                              className: l().Ends,
                              style: u.secondaryFont.style,
                              children: "Index Pool Mint Ends In:",
                            }),
                            (0, s.jsx)(A.Z, { targetDate: C.EndDate }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: l().mintContainer,
                          children: [
                            (0, s.jsx)("div", {
                              className: l().NFTContainer,
                              children: (0, s.jsx)(c(), {
                                className: l().bgImage,
                                src: C.Image,
                                fill: !0,
                                style: { objectFit: "cover" },
                                alt: "INFT Image",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: l().MintBox,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: l().Heading,
                                  style: u.primaryFont.style,
                                  children: [
                                    "Mint your NeoCortex",
                                    " ",
                                    (0, s.jsx)("span", { children: C.Name }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: l().amountContainer,
                                  children: [
                                    (0, s.jsx)("button", {
                                      disabled: r,
                                      className: l().amountChange,
                                      onClick: P,
                                      children: (0, s.jsx)(f.bQR, {
                                        size: 40,
                                        color: "#fff",
                                      }),
                                    }),
                                    (0, s.jsx)("div", {
                                      className: l().amountCounter,
                                      style: u.secondaryFont.style,
                                      children: w,
                                    }),
                                    (0, s.jsx)("button", {
                                      disabled: r,
                                      className: l().amountChange,
                                      onClick: D,
                                      children: (0, s.jsx)(f.b9W, {
                                        size: 40,
                                        color: "#fff",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: l().NFTprice,
                                  style: u.secondaryFont.style,
                                  children: [
                                    parseFloat(N.formatEther(M)) * w,
                                    " ",
                                    (0, s.jsx)(g, {}),
                                    (0, s.jsx)("p", { children: "BUSD" }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: l().BtnGroup,
                                  children: (0, s.jsx)("button", {
                                    className: l().MintButton,
                                    disabled: r,
                                    style: u.secondaryFont.style,
                                    onClick: R ? J : H,
                                    children: R ? "Mint" : "Approve",
                                  }),
                                }),
                                (0, s.jsx)("div", {
                                  className: l().desc,
                                  children: (0, s.jsx)("div", {
                                    className: l().MintRemaining,
                                    id: "f",
                                    style: u.secondaryFont.style,
                                    children:
                                      "Mint Your iNFT's Before The Season Ends",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", { className: l().spacer }),
                        (0, s.jsx)("div", {
                          className: l().historyHeading,
                          style: u.secondaryFont.style,
                          children: "History",
                        }),
                        (0, s.jsx)("div", {
                          className: l().historyContainer,
                          id: "History",
                          children: (0, s.jsx)(S, {}),
                        }),
                        (0, s.jsx)("div", { className: l().spacer }),
                      ],
                    })
                  : (0, s.jsx)(_.Z, {})
                : (0, s.jsx)(v.Z, {}),
            ],
          });
        };
      var M = B;
    },
    5415: function (e) {
      e.exports = {
        container: "Elastic_container__ACVUN",
        seperator: "Elastic_seperator__hxBCk",
        carousWrapper: "Elastic_carousWrapper__JovvR",
        card: "Elastic_card__J24Df",
        title: "Elastic_title__vV_9n",
      };
    },
    6298: function (e) {
      e.exports = {
        container: "NFTCard_container__0NJYZ",
        NFTContainer: "NFTCard_NFTContainer__WWmYn",
        nftImage: "NFTCard_nftImage__cx3oq",
        detailsItems: "NFTCard_detailsItems__N0Oqa",
        NFTTitle: "NFTCard_NFTTitle__77Nj1",
        descriptionContainer: "NFTCard_descriptionContainer__zAxYS",
        detailsContainer: "NFTCard_detailsContainer__50DRo",
      };
    },
    5504: function (e) {
      e.exports = {
        container: "mintInft_container__pppw_",
        NFTprice: "mintInft_NFTprice__TeK90",
        historyHeading: "mintInft_historyHeading___t0_8",
        CountdownContainer: "mintInft_CountdownContainer__7rR8e",
        Ends: "mintInft_Ends__c6bd7",
        historyContainer: "mintInft_historyContainer__bFly9",
        MintBox: "mintInft_MintBox__7APDu",
        mintContainer: "mintInft_mintContainer__7uzV5",
        MintRemaining: "mintInft_MintRemaining__a_b63",
        f: "mintInft_f__mkBDE",
        BtnGroup: "mintInft_BtnGroup__SlZPB",
        Heading: "mintInft_Heading__uc9R1",
        MintButton: "mintInft_MintButton__6rJJ5",
        NFTContainer: "mintInft_NFTContainer__M3cLL",
        bgImage: "mintInft_bgImage__LDwkh",
        amountContainer: "mintInft_amountContainer__m2Qme",
        amountCounter: "mintInft_amountCounter__pAzci",
        amountChange: "mintInft_amountChange__H7p9O",
        desc: "mintInft_desc__PGlgp",
        PNFTvid: "mintInft_PNFTvid__km55K",
        transactionToast: "mintInft_transactionToast__9YGVk",
        spacer: "mintInft_spacer__gkG61",
      };
    },
    1686: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"Id":1,"Name":"iNFT #1","Image":"/IndexNFT.webp","EndDate":"2023-09-07T11:00:00+00:00"}]'
      );
    },
  },
]);
