// Based on libnoise: http://libnoise.sourceforge.net
//
// Copyright (C) 2003, 2004 Jason Bevins
// Copyright (C) 2016 Douglas Morrow
//
// This library is free software; you can redistribute it and/or modify it
// under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation; either version 2.1 of the License, or (at
// your option) any later version.
//
// This library is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
// License (COPYING.txt) for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with this library; if not, write to the Free Software Foundation,
// Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
//
'use strict';
function cubicInterp(n0, n1, n2, n3, a) {
    var p = (n3 - n2) - (n0 - n1);
    var q = (n0 - n1) - p;
    var r = n2 - n0;
    var s = n1;
    return p * a * a * a + q * a * a + r * a + s;
}
module.exports = cubicInterp;
