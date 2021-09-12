import { SailBoat } from "../sail_boat";
import { CombustionEngine } from "../combustion_engine";
import { ElectricEngine } from "../electric_engine";

let SBE = new SailBoat()
describe('Check default value of slratio', function () {
    test("slratio should be 1.34", () => {
        expect(SBE.slratio).toBe(1.34);
    });
});

describe('Check set and get slratio', function () {
    test("slratio should be 5.42", () => {
        SBE.slratio = 5.42
        expect(SBE.slratio).toBe(5.42);
    });
});

// reset to default values
SBE = new SailBoat()

describe('Set Electric Engine', function () {
    test("engines[name] should be ElectricEngine", () => {
        SBE.engines['electric'] = new ElectricEngine()
        expect(SBE.engines['electric']).toStrictEqual(new ElectricEngine());
    });
});

describe('Set Combustion Engine', function () {
    test("engines[name] should be CombustionEngine", () => {
        SBE.engines['combustion'] = new CombustionEngine()
        expect(SBE.engines['combustion']).toStrictEqual(new CombustionEngine());
    });
});

test("Test change value in SBE.engines['electric']", () => {
    SBE.engines.electric.ratedpower = 5
    expect(SBE.engines.electric.ratedpower).toBe(5);
});