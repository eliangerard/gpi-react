import React from "react";
import './InfoCard.css'

export const InfoCard = () => {
    return (
        <>
            <div className="halfCardInfo">
                <div className="levelInfo">
                    <div className="nameInfo">
                        Granja la pascualita
                    </div>
                    <div className="heartInfo">
                        <img src="https://www.freeiconspng.com/uploads/love-heart-icon-14.png" className="imageInfo" />
                    </div>
                </div>
                <div className="levelInfo">
                    <div className="priceInfo">
                        $14,000
                    </div>
                    <div className="hoursInfo">
                        / 5 horas
                    </div>
                </div>
                <div className="levelInfo infoInfo">
                    <div className="informationInfo">
                        Granja en renta, ubicada en zona rural. Ideal para la producción de cultivos o
                        ganadería. Cuenta con 50 hectáreas, agua y electricidad. Acceso a carretera principal.
                        Precio accesible. Perfecta para agricultores o emprendedores en el sector agropecuario.
                        ¡Contáctanos para más información!
                    </div>
                </div>
                <div className="ownerPictureInfo">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISERIRGBgYEhIYEhgYERgYEhISGRgZGhgZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NjEBDAwMEA8QHhISHjQnJCsxNDQ3NDYxNTQ2NDQ0NDQ0NDQ9NDQ0NDQ0NDQ0MTE0NDQ0NDQ0NDQ0NDQ0NDQ0NTQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEQQAAEDAgMEBgcGAwYHAQAAAAEAAhEDIQQSMSJBUWEFBjIzQnETI1JigZGhB0NyscHw0eHxNHOCkrLCFBVTY4PS4hf/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEBAAICAQMBBwQDAAAAAAAAAAECAxEhBDFBEgUTIjJRcYEzYbHwI0Kh/9oADAMBAAIRAxEAPwD1kqFKhWUEREWEREBERAUqFKAiKUEKUWF0r0jTw1J9WobAWE3c7cBzUI1tkYnEMpsdUqPaxrRLnEwAuS6U+0PCUiBTa+pInM2A0Hhe5XnXWbrLXxlQ5nEMnZYDDRwkbzzWqZhrgOm5F/1WF82uzppg33d//wDqjs39lGW33hzc90LcYH7SsHUIFRlSna5IDmg79LwvNWYJrmgiRPyHn++Ktv6NIVIzy0np4e94DpGjiG56NRjxyNx5jUahZS8Awj6+Fe2pRe5rmncfzG8cl6f1T66sxWWnWDWVIiZ2Xu4AbjqfgVtTLWzDJhtV2KIi0YJREUgiIgKVClFhEUqAUhQqkBERBjFFKKRCIiAoUoghSiICIpQEREEEwCTuXnHWbGtxdSCTkHYaZAHvEDxFdj1lxno6QY0wXkjmGAS4/p8VwdJmZ+Y/DyXNnvriHTgpudtFV6vuzZmGRzEI7oupI2HExuXa0qbTGizcPRaDOULi9Uy7NRDk8F0XUjKWQIEz+7K3iejCLibHgu9yjgsLFUGnck7K25ef4im5hv8AHmtbXBpvD2mDIuLQ4Xsu3x3R4foFzPSvR7mi43qa21K19TD0XqP1mOLpmlVj0rAJNoqM4xx4rrl4Z1YxjqOKo1B7QDtQC02MxyXuQM3XoYreqOXmZqRW3CURFqxERSoWEREEoiqQEREBERBYKhSoQEUqEBERBClEQERSpEKURBxHXPFH0op8Gtb8DtO/QLUUALXAWf1uZOMaJ1j/AED+Cw6dFhG1cnS+nkvOzc2l6ODisNvh2CBBWYwBc8KppuAkxunVb6iczZWUQvbbILm7yFYe9h8Y+a1+IfdX6ZY0SWW3mFJ6dLWKstVjmh7S12urTx5LaYkAjZJjhwWrxjSBI3EfJU7SvMbhpWYCCxwEEO+g/ovYsB3VP+7Z+QXlrn2jj/OV6h0X3FL+7Z+S7ennu4eo8MpERdTmFKhSgKVClAVSpVSAiIgIiILBRSoQEREBQpRBCKUQQpRFILTdZemThKbSxoc95hoOgG8rcrlOulEl1F27T4h1/oVlmtNaTMNumrW2SK27OcxOPfiMQ17w0ObTdMNi+gkSbwVbfh6jnA5nBsGcsyTumN3LelN4NdzWi3o3SeYLY/VbvDsEaLgm0zzL0ZpFZ1DlsF0dXYCKlUuaJygue5xJIuc1gQJAiNbrr+j3EURPALDxjdGgalbPJlpgDRVmZnlWYjWmBicNIa4F2u0BqRyI0WhwHQuJbUc4Yh8S/KAXGSSIzg7J3/NdfhWgzvWQKY4K0TOlZnlq2YYgAEiYEwIE+S1+NbAdPBbzEQFp8QZdHmqS0rywaOFFRoc5xaARoLuO4Bdf0F02HkYd7S1zQ1rZEEiIBIkgzxG/cuew9U06oa+nsaB06VNRbhH1W2ZSD8XRIGkGeUhx+jStcVrRaNKZMdbVnceJnbrURF6LyxSiIClQpQFUqVUgIiICIiCyoVShBCKUQQilQgIiICIpQFr+m8H6ai5oEubtN/EN3xEj5LYKVFqxaNSVtNbRaPDzChQIqZps6bb5g/rC22FfZbrpLq76SqKtN4btBzmlsiRqRB3/AKrnGvLHkcCV518dq93qVzVycx9FPSrHutTMGDeJg+W9KNPFVGZRUymBtBoJnydIVL+k6YJDntB3ibz5K9R6YpQCM/C1M6cVRpETriG1wLKjWn0hBcY+m8rKLoWm/wCdUzO19CD8joshmMD2BzTI4hT2ZzWd7lXiXrUtvU/JZFapqnQ+EfVqjIBAJLieyBB1jfJCiKzadQtMxWNyz6uGJYQfEQXXmDyW36CwZE1HDVoaz8O93x/jxVeF6KMzVLSBo1pJafxEgT5Larrw4Zid2cebPuvpqKVCldTlEREEoiICqREBERAREQWlClEEIilBCIiAiIgIiKRMIgUqFRcX1kwhpVTUA2Xkkcj4h87/ABXaLzf7RusD2V6VCmdlmV1Yah+aNkjk0yObuSyzRE15dPTRab8Jp5HCzRrwWbQZFx8ty0+AxrQQdxW8p4ynbRee9Dcx2ZLXADQLXV4aTlEAmTwlX8V0hTaJkLncZ0sX2YD5pKKxMsuviNwXX9TQ30DnNIJLyDxgARI3XLj5ELz+hQe/af8AJbHqVi6lPpJ9PVlUBpHDLTzB3wOYeTltgmIspnpNqTrxy9PREXoPMERFAKVCIJREQVIiICIiAiIgtwkIkoACQkogQkIkoEKIUogQkIilUhIVjG42nRZnq1GsbxcYk8ANSeQXD9Odf4JZhGg7s7xqfdbu8z8lS1617tsWC+Sfhj8+Ha4/pCjh2Z69RjBMAuOp4NGpPILwzpvHOxOIq1neOo4tG8M0Y3/LDU6RxlXEPL6z3Pcc0OJDg0DwgAwBy+ixGsJtBzQCLHaEa8oXLfJ6nr9P0sYeZncyuYLHGnsvksmAd9M+zzC3tJ+YAtdI81zgbMRrByk6OG8u9798Few1U0+zJboBo5p3k8ljau2lsU+HSsw86rOw+DE3C0+DxcxtgcMxgO5tJ1Wwr9KNptttv3Aafz+Cr6WXptM60y8fiGUWbpNmji79BzXOUcW9lQVWvLXBxIcNQ8XPmB9QrVas55c57pMbR9phnYZz/hyvaiZtpA5ADsj+JVojTrx4YiNTzt7T0F0zTxdJr2ubnyj0jMwljt4jWJmCtpC8IolzSHsc5rgHZXMO2CDuNiF0/RfXLE0TlqkVWANO1DXhpA0IJJ1GoK6q5o8vMzezrRMzjnf7PUISFz/RXW3C14aXGm4+GpDZPJ3ZPznkugW8Wiezz7UtSdWjRCQqkUqiIiAiIgIiIEIiILaFFJQUqURAREQERU1qrWNc97g1rQS5xMBrRqSUEVajWNLnEBoBJJMAAakncFw3TXXu5ZhGjfFR41gXLGH8z8lp+tXWh+KJZTltFp4wahBF3ctLfrpoGatGnrHtO21msRI1XPfNPar1el6GuvVkjn6KsbiatZxfVdUe4szBztBcSATZrdbADRY7zcmR2mGCc0ZhI8JCqaG7Pd3bUbcvN7m/zlUBxymCbsbocjbOy6lc+3qRWI4hayCw2O09p7Q1HIKz6GQ0iLNMG8S0kwSSFnvcQ4mTarPfN3qimyS2JdD3N0LyAeJMCNdETrcMRsOBJFzHpGiMx5tizR++SvMYSQLFxs1w0qDcwfx/lNL6Thkc29iHNhjQ8Ak3g89EqnMw5DZzTG7LAvknQIjWmz6v4ig17jUIIygU8zc7GG4cBANyIgx+a11TEs9O9rLMe4mi7QUz4g0HQHWOZVzo+iQykIf2x92HAABvE8ymIwgexoIeLVCD6ICCBIuDa4U78M/d/F64nn/i81k5ctpn0YEbI8TxxnhqPgoIHhBysIiGkwSb8CLzvWJhsU67Kh2soJcW2dTA1I3O4kX+ayX5SHdi7aUTnkSAYlQ1raJXnC4Drbbm3BmD5tP5q22CBGW7HA3YOyZ8TRwCrYYdaB613ZqRMcQVDS6GyKnd1DcB4vmahvgnUj2WusGzwPZcFtuium8ThTFN78odGR7XGnB0tePMELTvIAINvVs7VIDUg7lUXAE9jt09M4OhUxMxPCl6VvXVo3D1zq90/SxbbQ14G0zNJ82nxD8lu14dh8S6m9r2PLXNcS1wNwQeJHM2OosvWOrfTLcXQD7B7dmq0aB3Ee6dR8ty6seT1cT3eL1fS+6n1V7fw3KIi1cQiIgIiICIiC0qiqFUgBECICIiATFz8eAC8w659aRiJoUD6tp2jF6zhpHuixHGZ3Lq+v2ONLBPDTBqFtPWDlMl3zDSP8S8hMuMX7R8QOmnluXPmvPaHpdBgif8lvwvgjjaLk7gRGb5j6qpleLXmWkARIIsZJ36FUPO8CZlzR7YPa/ymfkViV3wWnmJn7z3vqud629NvDg4XqWqnwDsmN86WWI9hgSL5ajTndcEHN2f3qrxAk2p95T8TuB5oAJtlnPU7IJPZ5ouguJa8jP9260MbcXv8VVWiXFxbaq0jNULiAZPh8grZFjIb3be04k2I3C6qe/tgOuRTdsMveN9jv8AqgqZlDgJFqpFqYOsDf5KKVMQyzr5wfUtvb+aqe98utWPrGO7RGsk7vJQQBch2zUOtQCxjiOShG0YVoysIFM7b97gey3iUY2zdlvYqaVBvDuanDuMMa3M4k1CGikCXEAaRebKA4Q0E05FN8g04IOZwM7KGxzQbkOJFNseuaSDIFrc1U4uv3ovSGmYWb8OCtuywe7Pq2e2N7VWGDNoO9YNmoBpPElSeEZwSDLO3VN2QeyPZCpDRGlO1PdUjV3vHmrjc2z3n3u/MJy/BRlMaPvSP3Ldx/kghxgOALhsU9KzeAVbnmXbR7xmtWePBUvaYfZ3ds+5buyhU4p0Zxe7mWNMA3B4X3hETrSGvLto6GSJN8syQfjELedUek3YfF0wCS17mMe0dkh7g0H4GD8+K0Td8xMjMdxf4Y5Df/RbLq5TD8Zh2iLV6Ri+bK10n/T9VaveNMs0ROO2+2ntSIi7nzYiIgIiICIiCyiKYUCQiAIpBEUoPPvtVrwzD05HjeZ5ZQP1XnjHw6bG5I3NFwbjhu+K7X7Ua04imwTs4cGx9pzv/ULh2uvzIgTd17+RC48s7tL3ekjWGP73lkF9tYvr7L97RyMfu6wsUdN1x/4+X7/NXaj8r3QRBLyAJImYmDorWKsL/mD6Q8DCo6bTw2bKouSW3qU4imDx4gK5e0h8ekfrDG6DdosNj3RrU7ItpcGPyV9o2tPvB2n3Ad5QoX2NMAXpiabpsXaFx5jcpDi4GDUcDTFgMosRwnhCmn4IcPvBssvpxsd6ZbDMHn1bu27L4jx/iiVLmCH7I7FMnM8awNwjiqq4EVLUxL26OcTMO4E3RwADu7GxT9o+z5hKzhFTap9pmlPkfd5qBvurfSowtTO+nWc1zajZBl7YcHSJgeGDdYnTuPGIrvrNFZjXUxALdowMuZ0GMxiStcxtm7I0q/eDgUa21mv7s6VBxPAK251pl7qsXm8d+w5zodtVT6tmtORqw7zzVT7F02h9PWkBuKh7O3LX92z7we5yUVnhpd2xJYbPG7XQc1DWN9gZZb3fePGj98Kmnl2e77uoNXjTMfzVRqODhLqo9Y86EjS15HAqx6ew2phh7TBq4kc9yETwuPAg7LO7bo/3hxJUVXHajMBmMyZBaABbnqrZeJuaZgtGhFmCTw5KgG4jKDaDm2QRck/En5IrMr7BoOWyN4pnWfeP73Loeo9LPj6LpkAPdpoAw5b+ZHyXONcDbK4g5iZsBUHE/pzXbfZnh81etUkkMphoJ4vcCPKzSr0jdoc/VW9OK0/t/L0lERdr58REQEREBERBbCIEQEREBSoUhSPIvtIeHY942dmnTbefYzbvxLk3Og07+IWA5RY/FbzrZiPSY3FOE/2hzbAGzGhnw7K0mIBySM2yHGwtI0kLhvO7S+gwxrFWPpEJxJsdZBcLsAMy3hfesXEOGXdfMTcA/Xy1Cyqx2WRMGT2xHaGnBYVQ+rdP1AMSZ1VYa37M1jgIkN+L9zhB05qptUD2Jgbibt3fJYmfTy5DzG9VMJOh4e1fh/BQmJbFuIi4L7PnZblGV3krYqgQIbo9t3SbzFhzPBWGUwdS3dPa0Ku0qWl26DRu8Ojf8UWjbIZVBadpndt0YCbEcuSqq1bP236Uz2QBpyKtNfA2XP7B7LeLjGhVGIqPyu7yIpiSYG4aXRMsumRDNmn2anjPA+8qCLDYp93/ANT3vxKKbxDdqn3b/B+IeyqXOEfd9gbne0h5Vvb29mn3dPx/g95RVG0/ZZcN+83bPvKp7hD9qn2aY7B4D3VFSCX3p9sN7Lhw4DkiYlWGEPlrXj1riS18i0cArZe4NEuf2DZzJuXxvPkqssmcrO1VNqkbuZVIbAbAeBDAYfYXJmw5IhQ90zdurvAJsA3hz+ixTq4y3szBB1nUDT+quV65Gpcd93ab+CYeSAdsTnGgaBa0u37kRM+F1wvJHiaRm1hwvDR8OS9O+zPD5cPVfF3ViPMNa2PqSvLnEZfDdomSSdYu4cuC9l6k4fJgKHFwc4/4nEj6QtsMfE4PaFtY9fWW/REXU8YREQEREBERBbCIAiAiIgKoKlSFI8Axwd6SqH9oVambdtTfzusbEMzMdp2X6uva/wAVvOtuF9HjcW3/AL2bSe8Af/uWmYARu8Q7M9pvNcFo1L6LHO6RP1hjUHh1NvZkB40M2MeSxnxDm2+o3Kvo95lzNrQkAXvF/wBFaxrix03vO+9/6prlG/giZZDGn+hA/T9ws6k0/wDc1B46ZisbouqHMGbLItcbhobfux4rPDWjhw1PIfy+BVZbU1NYmE02G3a8GrdTr+qZyIs/R5kW4gbuMn4qh1SY7B7zVx4QFbYwGJNPu3HxneUXlD3F0zJhg7VQcRuCnEU4DtlnbpiQ+SPIZr6K+QIddnYp+DjB9lRiTrds+lEZWbWyDpZEa4VtcIbtDu36sHtO81be6x2md237vmPdXQdB9Af8W1xfWqMa0U2xAzFzml4NzAGzHMlanpKiaVStSNR7iwBuYCxIIEi6mYnW1K5K2vNYnmFl7x6yXN8A7tv8FUHjOdpvff8ATEW+CpfV7zbqas3f/SrJOcnO/vHbrfmoXUNIgH1Z2Kh8TTeRyCt1DBAAbo0WM2yj9Sqg+WwHNJ9HvYAbv8uagalwmdbCOJ18ghLA6Qp+raZMZgbjW2n5KrAPBAkM7dpzTcbgFd6TpzTIg2cNTc3i/wBFaw5ygCd/tW04C6t4ZTuLSymAmwDrAAbAi7vpuXvfR+H9HRpU/ZY1v+VoH6LxXqng/SYrDsIF67HO2gdmntG3kF7kt8Md5eZ7QtzFfyIiLd5wiIgIiICIiC2pREEIiICkIikeT/aP/bHf3dH/AHLkaTjYyZzN33RFw3+aXvdP+lX7Nazvj5P/ACUY3sfL8kRR5hb/AEt95X+i9B+H9Cty1olth227veciJPdpj+SPsyqVJsM2W+PcFWKTYGy3u3bh7TlCKGksRrjxOtLf7qxsdUdlFz3j9/4URVaKf+Mq0pNKrUYTQElj3NJ2d8FXKtV3rNp33e8oiMK/MoqVXTU2nd43eeDleqPPpHXPbfv5FEUtUekdGp7NPfzVBcYFz3Y3/iREJK/dP+P+5a3DuMxJjNxspRWhjf5od11CaP8AmFOw0rbvdK9aRF04fleP1/6kfaBERauNSiIgKpEQUoiIP//Z"/>
                </div>
                <div className="levelInfoRating">
                    <div className="ratingcounterInfo">
                        40 Opiniones
                    </div>
                    <div className="ratingstarsInfo">
                        <span className="star2Info">&#9733;</span>
                        <span className="star2Info">&#9733;</span>
                        <span className="star2Info">&#9733;</span>
                        <span className="star2Info">&#9733;</span>
                        <span className="starnonr2Info">&#9733;</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard