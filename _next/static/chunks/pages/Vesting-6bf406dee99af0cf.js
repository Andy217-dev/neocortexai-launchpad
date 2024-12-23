(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [802],
  {
    6553: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/Vesting",
        function () {
          return n(6276);
        },
      ]);
    },
    6276: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var s = n(5893),
        o = n(3132),
        i = n.n(o),
        a = n(2593),
        r = n(5553),
        l = n(3564),
        d = n(1171),
        c = n.n(d),
        u = n(7294),
        g = n(2136),
        _ = n(8790),
        v = n(8680),
        m = n(2920);
      let p = [a.O$.from(0), a.O$.from(0), a.O$.from(0), a.O$.from(0)],
        h = (e) => {
          let { data: t, Status: n } = e,
            [o, i] = (0, u.useState)(t),
            [a, d] = (0, u.useState)(p),
            [h, y] = (0, u.useState)(!1),
            { account: j } = (0, g.O)();
          (0, u.useEffect)(() => {
            let e = async () => {
              try {
                var e;
                let t;
                let n =
                    v.NR[
                      null == j
                        ? void 0
                        : null === (e = j.network) || void 0 === e
                        ? void 0
                        : e.id
                    ],
                  s = _.xj.connect(n, null == j ? void 0 : j.signer),
                  i = o._id,
                  a = j.address,
                  r = await s.allocations(i, a);
                t =
                  "flexible" == o.vestingType
                    ? await s.calculateAmountUnlockedAndClaimedFlexible(a, i)
                    : await s.calculateAmountUnlockedAndClaimedLinear(a, i);
                let l = r[0].sub(r[1]),
                  c = [];
                (c[0] = r[0]),
                  (c[1] = l),
                  (c[2] = t[0].sub(t[1])),
                  (c[3] = t[1]),
                  d(c);
              } catch (e) {
                console.error(e);
              }
            };
            e();
          }, [
            null == j ? void 0 : j.network,
            null == j ? void 0 : j.signer,
            h,
          ]);
          let f = async () => {
              var e, t, n, s;
              let i = m.Am.loading("Claiming");
              try {
                let t =
                    v.NR[
                      null == j
                        ? void 0
                        : null === (e = j.network) || void 0 === e
                        ? void 0
                        : e.id
                    ],
                  n = _.xj.connect(t, null == j ? void 0 : j.signer);
                (await n.claim(o._id)).wait(1),
                  m.Am.update(i, {
                    render: "Token Claimed",
                    type: "success",
                    isLoading: !1,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0,
                    theme: "light",
                  }),
                  y(!h);
              } catch (d) {
                let e =
                  null == d
                    ? void 0
                    : null === (t = d.error) || void 0 === t
                    ? void 0
                    : null === (n = t.data) || void 0 === n
                    ? void 0
                    : n.data;
                if (!e) return d;
                let o =
                    v.NR[
                      null == j
                        ? void 0
                        : null === (s = j.network) || void 0 === s
                        ? void 0
                        : s.id
                    ],
                  a = _.xj.connect(o, null == j ? void 0 : j.signer);
                if (!o) return d;
                let r = a.interface.parseError(e),
                  l = Error(null == r ? void 0 : r.name);
                console.error(l),
                  m.Am.update(i, {
                    render: "Claim Failed, ".concat(l.message),
                    type: "warning",
                    isLoading: !1,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0,
                    theme: "light",
                  }),
                  y(!h);
              }
            },
            b = async () => {
              let e = m.Am.loading("Refunding, Please Wait!");
              try {
                if (
                  !(null == j ? void 0 : j.signer) ||
                  !(null == j ? void 0 : j.network)
                )
                  return;
                let t = v.bx[null == j ? void 0 : j.network.id];
                if (!t) return;
                let n = _.og.connect(t, null == j ? void 0 : j.signer),
                  s = await n.Refunder(),
                  i = _.KE.connect(s, null == j ? void 0 : j.signer);
                await i.refund(o.projectId._id),
                  m.Am.update(e, {
                    render: "Refund Successful",
                    type: "success",
                    isLoading: !1,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0,
                    theme: "light",
                  });
              } catch (d) {
                var t, n, s;
                let o =
                  null == d
                    ? void 0
                    : null === (t = d.error) || void 0 === t
                    ? void 0
                    : null === (n = t.data) || void 0 === n
                    ? void 0
                    : n.data;
                if (!o) return d;
                let i =
                  v.VU[
                    null == j
                      ? void 0
                      : null === (s = j.network) || void 0 === s
                      ? void 0
                      : s.id
                  ];
                if (!i) return d;
                let a = _.KE.connect(i, null == j ? void 0 : j.signer),
                  r = a.interface.parseError(o),
                  l = Error(null == r ? void 0 : r.name);
                console.error(l),
                  m.Am.update(e, {
                    render: "Refund Failed, ".concat(l.message),
                    type: "warning",
                    isLoading: !1,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0,
                    theme: "light",
                  });
              }
            };
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
              className: c().container,
              children: [
                (0, s.jsx)("div", {
                  className: c().hero,
                  style: {
                    background: "url(".concat(o.projectId.bannerbg_url, ")"),
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    backgroundSize: "cover",
                  },
                  children: (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: c().gameAvatar,
                        style: {
                          background: "url(".concat(o.projectId.logo_url, ")"),
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundColor: "#3b3b3b",
                        },
                      }),
                      (0, s.jsx)("div", {
                        className: c().heading,
                        style: l.primaryFont.style,
                        children: o.projectId.name,
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: c().details,
                  children: [
                    (0, s.jsxs)("div", {
                      className: c().detailGroup,
                      children: [
                        (0, s.jsx)("div", {
                          className: c().detailTopic,
                          style: l.secondaryFont.style,
                          children: "Allocated",
                        }),
                        (0, s.jsxs)("div", {
                          className: c().detailInfo,
                          style: l.secondaryFont.style,
                          children: [
                            parseFloat(r.formatUnits(a[0], o.tokenDecimals)) % 1
                              ? parseFloat(
                                  r.formatUnits(a[0], o.tokenDecimals)
                                ).toFixed(4)
                              : parseFloat(
                                  r.formatUnits(a[0], o.tokenDecimals)
                                ),
                            " ",
                            o.tokenId,
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: c().detailGroup,
                      children: [
                        (0, s.jsx)("div", {
                          className: c().detailTopic,
                          style: l.secondaryFont.style,
                          children: "Available",
                        }),
                        (0, s.jsxs)("div", {
                          className: c().detailInfo,
                          style: l.secondaryFont.style,
                          children: [
                            parseFloat(r.formatUnits(a[1], o.tokenDecimals)) % 1
                              ? parseFloat(
                                  r.formatUnits(a[1], o.tokenDecimals)
                                ).toFixed(4)
                              : parseFloat(
                                  r.formatUnits(a[1], o.tokenDecimals)
                                ),
                            " ",
                            o.tokenId,
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: c().detailGroup,
                      children: [
                        (0, s.jsx)("div", {
                          className: c().detailTopic,
                          style: l.secondaryFont.style,
                          children: "Claimable",
                        }),
                        (0, s.jsxs)("div", {
                          className: c().detailInfo,
                          style: l.secondaryFont.style,
                          children: [
                            parseFloat(r.formatUnits(a[2], o.tokenDecimals)) % 1
                              ? parseFloat(
                                  r.formatUnits(a[2], o.tokenDecimals)
                                ).toFixed(4)
                              : parseFloat(
                                  r.formatUnits(a[2], o.tokenDecimals)
                                ),
                            " ",
                            o.tokenId,
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: c().detailGroup,
                      children: [
                        (0, s.jsx)("div", {
                          className: c().detailTopic,
                          style: l.secondaryFont.style,
                          children: "Claimed",
                        }),
                        (0, s.jsxs)("div", {
                          className: c().detailInfo,
                          style: l.secondaryFont.style,
                          children: [
                            parseFloat(r.formatUnits(a[3], o.tokenDecimals)) % 1
                              ? parseFloat(
                                  r.formatUnits(a[3], o.tokenDecimals)
                                ).toFixed(4)
                              : parseFloat(
                                  r.formatUnits(a[3], o.tokenDecimals)
                                ),
                            " ",
                            o.tokenId,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: c().btnGroup,
                  children: [
                    (0, s.jsx)("div", {
                      className: c().btnCall,
                      style: l.secondaryFont.style,
                      onClick: f,
                      children: "Claim",
                    }),
                    o.projectId.protection
                      ? "enabled" == o.projectId.protection &&
                        (0, s.jsx)("div", {
                          className: c().btnCall,
                          style: l.secondaryFont.style,
                          onClick: b,
                          children: "Refund",
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
        };
      var y = n(5675),
        j = n.n(y),
        f = n(6154);
      let b = () => {
        let [e, t] = (0, u.useState)([]),
          { account: n } = (0, g.O)();
        return (
          (0, u.useEffect)(() => {
            let e = async () => {
              try {
                let e;
                let s = await (null == n ? void 0 : n.network.id);
                console.log(s),
                  (e = await (0, f.Z)({
                    method: "get",
                    url: "/api/Vesting/getVesting?chainId=".concat(s),
                    headers: { "Content-Type": "application/json" },
                  })),
                  t(e.data),
                  console.log(e);
              } catch (e) {
                console.error(e);
              }
            };
            e();
          }, [
            null == n ? void 0 : n.signer,
            null == n ? void 0 : n.network.id,
            n,
          ]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(m.Ix, {
                position: "top-right",
                autoClose: 3e3,
                hideProgressBar: !1,
                newestOnTop: !1,
                closeOnClick: !0,
                rtl: !1,
                pauseOnFocusLoss: !0,
                draggable: !0,
                pauseOnHover: !0,
                theme: "light",
              }),
              (0, s.jsxs)("div", {
                className: i().container,
                children: [
                  (0, s.jsxs)("section", {
                    id: "Projects",
                    children: [
                      (0, s.jsx)("div", {
                        className: i().Heading,
                        style: l.primaryFont.style,
                        children: "Vestings",
                      }),
                      (0, s.jsx)("div", {
                        className: i().subHeading,
                        style: l.secondaryFont.style,
                        children: "Project Vestings in our Ai Launchpad",
                      }),
                      (0, s.jsx)("div", {
                        className: i().projectGrid,
                        children: e.map((e, t) =>
                          (0, s.jsx)(h, { Status: !0, data: e }, e._id)
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("section", {
                    children: [
                      (0, s.jsx)(j(), {
                        src: "../assets/logosm.webp",
                        width: 90,
                        height: 90,
                        alt: "logosm",
                      }),
                      (0, s.jsxs)("div", {
                        className: i().Heading,
                        style: l.primaryFont.style,
                        children: [
                          (0, s.jsx)("span", { children: "AI Powered" }),
                          " Launchpad",
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: i().subHeadingSM,
                        style: l.primaryFont.style,
                        children:
                          "Are you working on a ground breaking project with a strong AI factor, apply for IAiO by clicking the button below",
                      }),
                      (0, s.jsx)("div", {
                        className: i().formText,
                        style: l.secondaryFont.style,
                        children: "Submit your details by filling up the form",
                      }),
                      (0, s.jsx)("a", {
                        style: l.primaryFont.style,
                        className: i().formBtn,
                        rel: "noreferrer",
                        target: "_blank",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdn1xc4_1odQxSfIU3XzZ1-hYUrmNGVm57srLkRSzzdvCXhPg/viewform",
                        children: "Apply",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var k = b;
    },
    3132: function (e) {
      e.exports = {
        container: "Vesting_container__8eHqp",
        HeadingContainer: "Vesting_HeadingContainer__VL6Wp",
        video: "Vesting_video__5dPs9",
        Heading: "Vesting_Heading__OiaPk",
        subHeading: "Vesting_subHeading__I1UYv",
        subHeadingSM: "Vesting_subHeadingSM__W_w3J",
        formText: "Vesting_formText__RSkma",
        formBtn: "Vesting_formBtn__5PT9t",
        ButtonContainer: "Vesting_ButtonContainer__ae0Av",
        ButtonApply: "Vesting_ButtonApply__xJjcd",
        btnGroup: "Vesting_btnGroup__NVlOV",
        cta: "Vesting_cta__bfY_2",
        projectGrid: "Vesting_projectGrid__MCw_1",
      };
    },
    1171: function (e) {
      e.exports = {
        container: "vestingProj_container__HJOdQ",
        hero: "vestingProj_hero__8fFYL",
        heading: "vestingProj_heading__Huiyt",
        gameAvatar: "vestingProj_gameAvatar__gkg6e",
        status: "vestingProj_status__RXAW3",
        status_cs: "vestingProj_status_cs__lv2XE",
        status_red: "vestingProj_status_red__Im7NC",
        details: "vestingProj_details__NGLdD",
        detailsTwo: "vestingProj_detailsTwo__8CKaG",
        detailGroup: "vestingProj_detailGroup__T2LYw",
        detailGroupCol: "vestingProj_detailGroupCol__RU1N5",
        btnGroup: "vestingProj_btnGroup__LIwvi",
        btnCall: "vestingProj_btnCall__ZYQz4",
        horSpc: "vestingProj_horSpc__OYISw",
        horSpcPar: "vestingProj_horSpcPar___quav",
        btnDetailCon: "vestingProj_btnDetailCon__TR1u0",
        btnDetail: "vestingProj_btnDetail__Lj4k9",
        website: "vestingProj_website__XkCso",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 6553));
    }),
      (_N_E = e.O());
  },
]);
