package io.routr.headers;

import java.text.ParseException;
import javax.sip.header.HeaderFactory;
import javax.sip.InvalidArgumentException;
import javax.sip.PeerUnavailableException;
import javax.sip.SipFactory;
import gov.nist.javax.sip.header.Via;

@ProtoMapping(header = Via.class, field = "via", repeatable = true, extension = false)
public class ViaConverter implements Converter<Via, io.routr.message.Via> {

  @Override
  public io.routr.message.Via fromHeader(Via header) {
    var builder = io.routr.message.Via.newBuilder();
    builder
      .setPort(header.getPort() == -1 ? 5060 : header.getPort())
      .setTransport(header.getTransport())
      .setHost(header.getHost()).build();

    if(header.getBranch() != null) {
      builder.setBranch(header.getBranch());
    }
  
    return builder.build();
  }

  @Override
  public Via fromDTO(io.routr.message.Via dto) throws InvalidArgumentException, PeerUnavailableException, ParseException {
    HeaderFactory factory = SipFactory.getInstance().createHeaderFactory();
    int port = dto.getPort() <= 0 ? 5060 : dto.getPort();
    Via header = (Via) factory.createViaHeader(dto.getHost(), port, dto.getTransport(), null);
    if (!dto.getBranch().isEmpty()) {
      header.setBranch(dto.getBranch());
    }
    return header;
  } 
}
