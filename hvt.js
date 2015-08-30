var util = require('./util.js');

module.exports = [
    // Standard HVT as defined in the paper in section
    // "VIII. A LOCAL REALISTIC HIDDEN VARIABLE THEORY"
    {
        name: "VIII Example HVT",
        entangle: function(p_angle) {
            // "As successive pairs are produced λ changes in an unpredictable
            // manner that uniformly covers the whole range of possible
            // polarizations."
            // We interpret this as:
            var λ = p_angle + (util.rndFn() - 0.5) * Math.PI / 2;
            return [λ, λ];
        },
        filter: function(γ, λ) {
            //x-dbg/ console.log(angle * 180 / Math.PI, hstate * 180 / Math.PI);

            // "In our HVT, each photon has a polarization angle λ, but this
            // polarization does not behave like polarization in quantum
            // mechanics. When a photon meets a polarizer set to an angle γ, it
            // will always register as Vγ if λ is closer to γ than to γ + π/2"
            // We interpret this as:
            return (Math.abs(γ - λ) <= Math.PI / 4)
                || (Math.abs(γ - λ) > 3 * Math.PI / 4);
        }
    }
];
