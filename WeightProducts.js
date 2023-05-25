const bobotKriteria = [
  {
    code: "K1",
    bobot: 0.26,
    benefitCost: "benefit",
  },
  {
    code: "K2",
    bobot: 0.111,
    benefitCost: "cost",
  },
  {
    code: "K3",
    bobot: 0.137,
    benefitCost: "cost",
  },

  {
    code: "K4",
    bobot: 0.335,
    benefitCost: "benefit",
  },
  {
    code: "K5",
    bobot: 0.089,
    benefitCost: "benefit",
  },
  {
    code: "K6",
    bobot: 0.071,
    benefitCost: "benefit",
  },
];

const alternativeDatas = [
  {
    K1: 0.1708,
    K2: 24,
    K3: 3,
    K4: 1,
    K5: 2,
    K6: 1,
  },
  {
    K1: 0.2196,
    K2: 18,
    K3: 5,
    K4: 1,
    K5: 3,
    K6: 1,
  },
  {
    K1: 0.244,
    K2: 22,
    K3: 4,
    K4: 0,
    K5: 2,
    K6: 1,
  },
  {
    K1: 0.2928,
    K2: 12,
    K3: 5,
    K4: 1,
    K5: 2,
    K6: 1,
  },
  {
    K1: 0.2684,
    K2: 11,
    K3: 3,
    K4: 0,
    K5: 1,
    K6: 1,
  },
];

const WPHandler = ({ arrAlternativeDatas, arrBobotKriteria }) => {
  const arrAllHasilVektorS = [];

  const arrHasilSi = [];
  arrAlternativeDatas?.forEach((data) => {
    const arrVektorSPerData = [];
    arrBobotKriteria?.forEach((bobot, idxBobot) => {
      const perkalianPerVektorS = Math.pow(
        data?.[`K${idxBobot + 1}`],
        bobot?.benefitCost === "cost" ? -bobot?.bobot : bobot?.bobot
      );
      arrVektorSPerData?.push(perkalianPerVektorS);
    });

    arrAllHasilVektorS?.push(arrVektorSPerData);
  });

  arrAllHasilVektorS?.forEach((data) => {
    const allPerkalianPerVektorS = data?.reduce(
      (beforeCurr, curr) => (beforeCurr *= curr)
    );
    arrHasilSi?.push(allPerkalianPerVektorS);
  });

  const sumArrHasilSi = arrHasilSi?.reduce((total, curr) => (total += curr), 0);

  const arrVektorV = [];
  arrHasilSi?.forEach((si) => {
    arrVektorV?.push(si / sumArrHasilSi);
  });

  console.log(arrVektorV);

  // return arrVektorV?.sort((a, b) => b - a);
  return arrVektorV;
};

// console.log(
//   WPHandler({
//     arrAlternativeDatas: alternativeDatas,
//     arrBobotKriteria: bobotKriteria,
//   })
// );

WPHandler({
  arrAlternativeDatas: alternativeDatas,
  arrBobotKriteria: bobotKriteria,
});
