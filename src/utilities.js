import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";

export const spaces = () => {
  return <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
};

export const formatNumber = (
  number,
  numberFormat,
  decimals = 0,
  smallfixed = false,
  addPadding = false
) => {
  const decimalPadding = Math.abs(number) < 1e6 ? 1 : decimals;
  if (addPadding)
    return formatNumber(
      number,
      numberFormat,
      decimals,
      smallfixed,
      false
    ).padStart(5 + decimalPadding, "\u2002");
  if (number < 0)
    return "-" + formatNumber(-number, numberFormat, decimals, smallfixed);
  number *= 1.0000000001; //hopefully less Javascript Jank

  const sNumberString = Math.floor(number).toExponential(10);
  if (number === Infinity) {
    return "Infinity";
  } else if (isNaN(number)) {
    return "NaN";
  } else if (smallfixed && number < 1e6) {
    return number.toFixed(decimals);
  } else if (number < 1e6 && (decimals > 0 || numberFormat === "SCIENTIFIC")) {
    return number.toFixed(0);
  } else {
    const aNumberSplits = sNumberString.split("e+");
    const fMultiplier = parseFloat(aNumberSplits[0]) * 1.0000000001;
    const iExponent = parseInt(aNumberSplits[1]);
    const aSymbols = [
      "",
      "K",
      "M",
      "B",
      "T",
      "Q",
      "P",
      "S",
      "V",
      "O",
      "N",
      "D",
    ];
    const aExtras = [1, 10, 100];
    let sSymbol;
    let iExtra;
    switch (numberFormat) {
      case "SCIENTIFIC":
        sSymbol = "e" + iExponent;
        iExtra = 1;
        break;
      case "AMBIGUOUS":
        if (number >= 1e36) {
          sSymbol = "e?";
          iExtra = 1;
        } else {
          sSymbol = "?";
          iExtra = aExtras[iExponent % 3];
        }
        break;
      default: //includes LETTER
        if (number >= 1e36) {
          sSymbol = "e" + iExponent;
          iExtra = 1;
        } else {
          sSymbol = aSymbols[Math.floor(iExponent / 2.9999)];
          iExtra = aExtras[iExponent % 3];
        }
        break;
    }
    if (!decimals && (fMultiplier * iExtra) % 0.1 > 0.005) {
      decimals = 2;
    } else if (!decimals && (fMultiplier * iExtra) % 1 > 0.05) {
      decimals = 1;
    }
    return (fMultiplier * iExtra).toFixed(decimals) + sSymbol;
  }
};

export const notify = {
  success: function (title, text) {
    this.showNotification({ status: "success", title: title, text: text });
  },
  warning: function (title, text) {
    this.showNotification({ status: "warning", title: title, text: text });
  },
  error: function (title, text) {
    this.showNotification({ status: "error", title: title, text: text });
  },
  showNotification: (props) => {
    return new Notify({
      status: "success",
      effect: "fade",
      speed: 1000,
      //customClass: "",
      showCloseButton: false, //
      autoclose: true, //
      autotimeout: 2000,
      type: 1,
      ...props,
    });
  },
};

export const secondsToHms = (seconds, showCentiseconds) => {
  if (seconds === Infinity) return "Infinity";
  if (isNaN(seconds)) return "NaN";

  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var cs = Math.floor((seconds * 100) % 100);

  var dDisplay = d > 0 ? d + "d" : "";
  var hDisplay = d > 0 || h > 0 ? h + "h" : "";
  var mDisplay = d > 0 || h > 0 || m > 0 ? m + "m" : "";
  var csDisplay =
    showCentiseconds && seconds < 60 ? (cs < 10 ? ".0" : ".") + cs : "";
  var sDisplay = s + csDisplay + "s";
  var hZero = dDisplay && h < 10 ? "0" : "";
  var mZero = hDisplay && m < 10 ? "0" : "";
  var sZero = mDisplay && s < 10 ? "0" : "";
  return dDisplay + hZero + hDisplay + mZero + mDisplay + sZero + sDisplay;
};

export const logB = (base, value) => Math.log(value) / Math.log(base);

export const geometricSum = (initial, base, steps) => {
  return (initial * (1 - Math.pow(base, steps))) / (1 - base);
};

export const reverseGeometric = (initial, base, sumvalue) => {
  return Math.floor(logB(base, (sumvalue * (base - 1)) / initial + 1));
};

export const clamp = (lower, value, upper) => {
  return Math.min(Math.max(lower, value), upper);
};

export const getRewardInterval = (amount, milliSeconds, globalMultiplier) => {
  if (globalMultiplier <= 1 || milliSeconds > 11000)
    return Math.max(1000, milliSeconds) / amount;
  else if (milliSeconds <= 1000) return 1000 / (amount * globalMultiplier);
  else
    return (
      milliSeconds /
      (amount * Math.pow(globalMultiplier, 1.1 - milliSeconds / 10000))
    );
};

export const getOfflinePopupLine = (label, before, after, numberFormat) => {
  const factor = after / before;
  if (after <= before) return <></>;
  else if (before <= 0)
    return (
      <>
        <br />
        Your {label} is now {formatNumber(after, numberFormat, 3)}.
      </>
    );
  else if (factor < 1.01 || before < 1e6)
    return (
      <>
        <br />
        Your {label} increased by{" "}
        {formatNumber(after - before, numberFormat, 3)}
      </>
    );
  else if (factor < 2)
    return (
      <>
        <br />
        Your {label} increased by +{Math.floor(factor * 100 - 100)}%
      </>
    );
  else if (factor < 100)
    return (
      <>
        <br />
        Your {label} increased by a factor of {factor.toFixed(2)}x
      </>
    );
  else
    return (
      <>
        <br />
        Your {label} increased by a factor of{" "}
        {formatNumber(factor, numberFormat, 3)}x
      </>
    );
};

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const numericSort = (numArray, descending) => {
  return numArray.sort(function (a, b) {
    return descending ? b - a : a - b;
  });
};

const stringifyFixer = (key, value) => {
  if (!key) return value;
  if (value === Infinity) return "[!$+Infinity$!]";
  if (value === -Infinity) return "[!$Infinity$!]";
  if (Number.isNaN(value)) {
    console.error("NaN detected for key " + key);
    return "[!$NaN$!]";
  }
  return value;
};

const stringifyReplacer = (jsonstring) => {
  return jsonstring
    .replaceAll('"[!$+Infinity$!]"', "1e5000")
    .replaceAll('"[!$-Infinity$!]"', "-1e5000")
    .replaceAll('"[!$NaN$!]"', "0");
};

export const stringifyProperly = (jsonobject) => {
  return stringifyReplacer(JSON.stringify(jsonobject, stringifyFixer));
};
